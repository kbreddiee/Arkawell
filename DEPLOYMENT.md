# Deployment Guide for Arkawell Site

This guide will help you deploy your Next.js site to GitHub and add a custom domain.

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name it: `arkawell-site` (or your preferred name)
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/arkawell-site.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

Your Next.js app is configured for static export, so it can be deployed to GitHub Pages!

### Option A: Deploy to GitHub Pages (Free, Simple)

1. **Build your site locally:**
   ```bash
   npm run build
   ```
   This creates an `out` folder with static files.

2. **Push to GitHub** (if you haven't already):
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (left sidebar)
   - Under **Source**, select **GitHub Actions**
   - Create a workflow file (see below)

4. **GitHub Actions workflow is already created:**
   The file `.github/workflows/deploy.yml` is already set up! It will:
   - Build your site on every push to `main`
   - Deploy to GitHub Pages automatically
   - Use environment variables from GitHub Secrets

5. **For custom domain:**
   - If deploying to `username.github.io/repo-name`, update `next.config.ts`:
     ```typescript
     basePath: '/arkawell-site',
     trailingSlash: true,
     ```
   - If using a custom domain (e.g., `arkawell.com`), no basePath needed

6. **Set environment variable in GitHub:**
   - Go to your repository → **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `NEXT_PUBLIC_GOOGLE_FORM_URL`
   - Value: Your Google Form URL (e.g., `https://forms.gle/your-form-id`)
   - Click **Add secret**
   
   The workflow will automatically use this secret when building.

**Your site will be live at:**
- `https://YOUR_USERNAME.github.io/arkawell-site` (if using subdirectory)
- `https://YOUR_USERNAME.github.io` (if repo is named `username.github.io`)
- Your custom domain (if configured)

### Option B: Deploy to Vercel (Recommended for Next.js)

Vercel is the best platform for Next.js apps - it's free and supports custom domains.

#### Deploy via Vercel Dashboard

1. Go to [Vercel](https://vercel.com) and sign up/login (you can use GitHub to sign in)
2. Click **Add New Project**
3. Import your GitHub repository (`arkawell-site`)
4. Vercel will auto-detect Next.js settings
5. Click **Deploy**
6. Your site will be live in ~2 minutes at `your-project.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
cd arkawell-site
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? arkawell-site
# - Directory? ./
# - Override settings? No
```

## Step 4: Add Custom Domain

### On Vercel:

1. Go to your project dashboard on Vercel
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `arkawell.com` or `www.arkawell.com`)
4. Click **Add**

### Configure DNS Records:

Vercel will show you DNS records to add. You need to add these at your domain registrar:

**For Root Domain (arkawell.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)

**For WWW (www.arkawell.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Alternative: Use CNAME for root (if your registrar supports it):**
- Type: `CNAME`
- Name: `@`
- Value: `cname.vercel-dns.com`

### Popular Domain Registrars:

- **Namecheap**: Go to Domain List → Manage → Advanced DNS
- **GoDaddy**: Go to My Products → DNS → Manage DNS
- **Google Domains**: Go to DNS → Custom records
- **Cloudflare**: Go to DNS → Add record

### Wait for DNS Propagation:
- DNS changes can take 24-48 hours, but usually work within a few hours
- Vercel will show "Valid Configuration" when DNS is ready
- Your site will automatically use HTTPS (SSL certificate is free)

## Step 5: Set Up Google Forms Contact Form

Your Contact Us form redirects to a Google Form. The form URL is stored securely in environment variables (not exposed in code).

### Create Your Google Form:

1. Go to [Google Forms](https://forms.google.com)
2. Click **Blank** to create a new form
3. Add these fields (matching your site's form):
   - **Name** (Short answer, required)
   - **Email** (Short answer, required)
   - **Project Idea** (Paragraph, required)
4. Click the **Send** button (top right)
5. Click the **Link** icon
6. Copy the form URL (looks like: `https://forms.gle/xxxxxxxxxx`)

### Set Up Environment Variable:

**For Local Development:**
1. Create a file named `.env.local` in the root of your project
2. Add this line (replace with your actual Google Form URL):
   ```
   NEXT_PUBLIC_GOOGLE_FORM_URL=https://forms.gle/your-actual-form-id
   ```
3. Restart your development server

**For Production (Vercel/Netlify):**
1. Go to your project dashboard → **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name:** `NEXT_PUBLIC_GOOGLE_FORM_URL`
   - **Value:** `https://forms.gle/your-actual-form-id`
3. Redeploy your site

**Important:** 
- Never commit `.env.local` to GitHub (it's already in `.gitignore`)
- The `.env.example` file shows the format but doesn't contain your actual URL
- Use `NEXT_PUBLIC_` prefix so the variable is available in the browser

### Optional: Customize Google Form

- Add your logo/branding
- Customize colors to match your site
- Set up email notifications in Google Forms settings
- Responses will be saved in a Google Sheet automatically

That's it! When users click "Open Contact Form", they'll be taken to your Google Form.

## Alternative: Deploy to Netlify

If you prefer Netlify:

1. Go to [Netlify](https://netlify.com) and sign up
2. Click **Add new site** → **Import an existing project**
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click **Deploy**
6. For custom domain: Site settings → Domain management → Add custom domain

## Troubleshooting

### Build Errors:
- Make sure all dependencies are in `package.json`
- Check that Node.js version is compatible (Next.js 16 requires Node 18+)

### Custom Domain Not Working:
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify domain is verified in Vercel/Netlify

### Need to Update Site:
- Just push changes to GitHub
- Vercel/Netlify will auto-deploy on every push to `main` branch

## Next Steps

After deployment:
- ✅ Your site is live!
- ✅ Set up automatic deployments (already enabled by default)
- ✅ Add analytics if needed
- ✅ Configure redirects if needed (in Vercel/Netlify settings)



