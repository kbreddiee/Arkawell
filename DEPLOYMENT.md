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

## Step 3: Deploy to Vercel (Recommended for Next.js)

Vercel is the best platform for Next.js apps - it's free and supports custom domains.

### Option A: Deploy via Vercel Dashboard

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

## Step 5: Environment Variables (If Needed)

If you add environment variables later:
1. Go to Vercel project → **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy (or they'll be added on next deployment)

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

