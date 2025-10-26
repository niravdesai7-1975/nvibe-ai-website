# Adding Your Founder Photo

To add your photo to the About Us page:

1. **Prepare your image:**
   - Use a high-quality, professional headshot
   - Recommended size: 400x400 pixels or larger
   - Format: JPG, PNG, or WebP
   - Make sure the image is well-lit and professional

2. **Add the image to the project:**
   - Place your image file in the `public/images/` directory
   - Name it `nirav-desai.jpg` (or update the filename in the component)

3. **Update the AboutSection component:**
   - Open `src/components/AboutSection.tsx`
   - Find the placeholder image section (around line 25)
   - Uncomment the `<Image>` component and comment out the placeholder div
   - Update the `src` path to match your image filename

4. **Example of the change:**
   ```tsx
   {/* Before (placeholder): */}
   <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
     <div className="text-white text-6xl font-bold">ND</div>
   </div>
   
   {/* After (with your image): */}
   <div className="w-64 h-64 rounded-full overflow-hidden">
     <Image
       src="/images/nirav-desai.jpg"
       alt="Nirav Desai"
       width={256}
       height={256}
       className="w-full h-full object-cover"
     />
   </div>
   ```

5. **Test the page:**
   - Run `npm run dev` to start the development server
   - Navigate to `http://localhost:3000/about`
   - Verify the image displays correctly
   - Check that it's responsive on different screen sizes

The image will automatically be styled as a circular profile photo that matches the professional design of the About Us page.
