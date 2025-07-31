# Chengcheng Wang - Personal Academic Website

A professional, responsive academic website built with modern web technologies. This website is inspired by academic portfolio sites and designed to showcase research, publications, and professional achievements.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Enhanced navigation experience
- **Interactive Elements**: Hover effects, expandable content, and animations
- **Accessibility**: Keyboard navigation and screen reader friendly
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Print Friendly**: Optimized print styles for CV generation

## 📁 File Structure

```
chengcheng-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css        # Main stylesheet
├── js/
│   └── script.js        # JavaScript functionality
├── images/
│   └── profile.jpg      # Profile picture
├── cv_2025.pdf          # Your CV document
└── README.md            # This file
```

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Customize the content**: Follow the customization guide below
3. **Deploy**: Upload the entire folder to your web hosting service

## ✏️ Customization Guide

### 1. Personal Information

Replace the placeholder information in `index.html`:

**Header Section (lines 19-45):**
- Update your name in the `<h1>` tag
- Change your title/position in the `<h2>` tag
- Update your university/institution affiliation
- Add your actual contact links (email, social media, etc.)

**Example:**
```html
<h1 class="name">Your Full Name</h1>
<h2 class="title">PhD Candidate in Computer Science</h2>
<p class="affiliation">Stanford University</p>
```

### 2. About Section

**Lines 47-58:** Replace with your actual research background:
- Current position and advisor
- Research focus and interests
- Dissertation topic
- Educational background

### 3. Research Section

**Lines 60-83:** Update with your research projects:
- Add your dissertation project description
- List current research projects
- Update research interests

### 4. Publications

**Lines 85-110:** Add your actual publications:
- Journal articles
- Conference presentations
- Working papers
- Preprints

**Format example:**
```html
<div class="publication-item">
    <p>
        <strong>Wang, C.</strong>, Smith, J., & Doe, A. (2024). 
        <em>Title of Your Research Paper</em>. 
        Journal of Computer Science, 15(3), 123-145.
    </p>
</div>
```

### 5. Education

**Lines 112-131:** Update with your educational background:
- PhD program details
- Master's degree
- Bachelor's degree
- Include graduation years, institutions, and thesis titles

### 6. Experience

**Lines 133-150:** Add your work experience:
- Academic positions
- Industry experience
- Research positions
- Include dates, organizations, and descriptions

### 7. Awards & Teaching

**Lines 152-180:** Update with your achievements:
- Awards and honors
- Teaching experience
- Guest lectures

## 🎨 Styling Customization

### Colors

The website uses a professional blue color scheme. To change colors, edit `css/style.css`:

```css
/* Primary color (currently blue) */
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #27ae60;
    --warning-color: #e74c3c;
    --info-color: #f39c12;
}
```

### Fonts

The website uses 'Source Sans Pro'. To change fonts, update the Google Fonts link in `index.html` and the CSS:

```css
body {
    font-family: 'Your-Font-Name', sans-serif;
}
```

### Layout

- **Container width**: Modify `.container { max-width: 900px; }` in CSS
- **Section spacing**: Adjust `section { margin-bottom: 50px; }` in CSS
- **Profile image size**: Change `.profile-image { width: 180px; height: 180px; }` in CSS

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **768px**: Tablet layout
- **480px**: Mobile layout

To modify responsive behavior, edit the media queries in `css/style.css`.

## 🌙 Dark Mode

The website includes an optional dark mode toggle. Features:
- Automatic theme detection based on user preference
- Manual toggle button (top-right corner)
- Persistent theme selection using localStorage

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## 🚀 Deployment Options

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `username.github.io/repository-name`

### Option 2: Netlify
1. Create a Netlify account
2. Drag and drop the website folder to Netlify
3. Your site will be deployed with a custom URL

### Option 3: Personal Web Hosting
1. Upload all files to your web hosting provider
2. Point your domain to the hosting directory

## 🔧 Additional Customizations

### Adding a Blog Section
To add a blog, create a new HTML file (`blog.html`) and link it from the main navigation.

### Contact Form
To add a contact form, you'll need a backend service like Formspree or Netlify Forms.

### Analytics
Add Google Analytics by including the tracking code in the `<head>` section of `index.html`.

### SEO Optimization
- Update meta tags in `<head>`
- Add structured data markup
- Include Open Graph tags for social media sharing

## 📊 Performance Tips

1. **Optimize images**: Compress your profile image and any additional images
2. **Minify CSS/JS**: Use tools like UglifyJS for production
3. **Enable caching**: Configure proper cache headers on your server
4. **Use CDN**: Consider using a CDN for faster loading

## 🐛 Troubleshooting

### Common Issues:

1. **Images not loading**: Check file paths and ensure images are in the correct directory
2. **Fonts not displaying**: Verify Google Fonts link is correct
3. **JavaScript errors**: Check browser console for error messages
4. **Responsive issues**: Test on different devices and screen sizes

### Browser Support:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 Content Tips

### Writing About Your Research:
- Use clear, accessible language
- Include keywords relevant to your field
- Keep descriptions concise but informative
- Update regularly with new achievements

### Publication Formatting:
- Follow standard academic citation format
- Include DOI links when available
- Separate by publication type
- List in reverse chronological order

## 🤝 Contributing

This website template is open for improvements. If you have suggestions or find bugs, please feel free to contribute.

## 📄 License

This template is free to use for academic and personal purposes. No attribution required, but appreciated.

## 📞 Support

If you need help customizing this website, you can:
1. Check the inline comments in the HTML/CSS files
2. Search for web development tutorials
3. Consult with web development communities

---

**Last Updated**: January 2025

**Version**: 1.0

**Created by**: AI Assistant based on academic website best practices