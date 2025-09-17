'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  user_metadata: {
    name: string
    company?: string
  }
  created_at: string
}

interface AuthContextType {
  user: User | null
  session: any
  loading: boolean
  signUp: (email: string, password: string, userData?: { name: string; company?: string }) => Promise<{ error: any }>
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('mockUser')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
        setSession({ user: userData })
        console.log('MockAuth: Restored user session', userData)
      } catch (error) {
        console.error('MockAuth: Error parsing saved user', error)
        localStorage.removeItem('mockUser')
      }
    }
  }, [])

  const signUp = async (email: string, password: string, userData?: { name: string; company?: string }) => {
    setLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Check if user already exists
    const existingUser = localStorage.getItem('mockUser')
    if (existingUser) {
      const parsedUser = JSON.parse(existingUser)
      if (parsedUser.email === email) {
        setLoading(false)
        return { error: { message: 'User already exists' } }
      }
    }

    // Create new user
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      user_metadata: {
        name: userData?.name || 'User',
        company: userData?.company || ''
      },
      created_at: new Date().toISOString()
    }

    // Save to localStorage
    localStorage.setItem('mockUser', JSON.stringify(newUser))
    setUser(newUser)
    setSession({ user: newUser })
    setLoading(false)

    return { error: null }
  }

  const signIn = async (email: string, password: string) => {
    console.log('MockAuth: Sign in attempt', { email, password: '***' })
    setLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Check for demo credentials
    if (email === 'demo@nvibe.ai' && password === 'demo123') {
      const demoUser: User = {
        id: 'demo-user',
        email: 'demo@nvibe.ai',
        user_metadata: {
          name: 'Demo User',
          company: 'NVibe AI'
        },
        created_at: new Date().toISOString()
      }
      
      localStorage.setItem('mockUser', JSON.stringify(demoUser))
      setUser(demoUser)
      setSession({ user: demoUser })
      setLoading(false)
      console.log('MockAuth: Demo user signed in', demoUser)
      return { error: null }
    }

    // Check for existing user
    const existingUser = localStorage.getItem('mockUser')
    if (existingUser) {
      const parsedUser = JSON.parse(existingUser)
      if (parsedUser.email === email) {
        setUser(parsedUser)
        setSession({ user: parsedUser })
        setLoading(false)
        console.log('MockAuth: Existing user signed in', parsedUser)
        return { error: null }
      }
    }

    setLoading(false)
    console.log('MockAuth: Invalid credentials')
    return { error: { message: 'Invalid credentials' } }
  }

  const signOut = async () => {
    localStorage.removeItem('mockUser')
    setUser(null)
    setSession(null)
  }

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
