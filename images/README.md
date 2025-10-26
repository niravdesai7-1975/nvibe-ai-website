# Adding Your Founder Photo

To add your photo to the About Us page:

1. **Prepare your image:**
   - Use a high-quality, professional headshot
   - Recommended size: 400x400 pixels or larger
   - Format: JPG, PNG, or WebP
   - Make sure the image is well-lit and professional

2. **Add the image to the project:**
   - Place your image file in the `images/` directory
   - Name it `nirav-desai.jpg` (or update the filename in the HTML)

3. **Update the About Us page:**
   - Open `about.html`
   - Find the section with the placeholder image (around line 200)
   - Uncomment the `<img>` tag and comment out the placeholder div
   - Update the `src` path to match your image filename

4. **Example of the change:**
   ```html
   <!-- Before (placeholder): -->
   <div class="member-photo">
       <div class="placeholder">ND</div>
   </div>
   
   <!-- After (with your image): -->
   <div class="member-photo">
       <img src="images/nirav-desai.jpg" alt="Nirav Desai">
   </div>
   ```

5. **Test the page:**
   - Open `about.html` in your browser
   - Verify the image displays correctly
   - Check that it's responsive on different screen sizes

The image will automatically be styled as a circular profile photo that matches the professional design of the About Us page.
