import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

// Only create client if we have valid credentials
export const supabase = (supabaseUrl !== 'https://your-project.supabase.co' && supabaseAnonKey !== 'your-anon-key') 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Contact form submission function
export async function submitContactForm(formData: {
  name: string
  email: string
  company?: string
  message: string
}) {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      throw new Error('Supabase is not configured. Please check your environment variables.')
    }

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error }
  }
}