SHOPIFYLLMS - EDGE FUNCTION SETUP

1. Upload this entire folder to your Vercel project.
2. Ensure your project root contains:
   - /api/llms.js          --> Logs bot/user access and serves llms.txt
   - /vercel.json          --> Tells Vercel to treat /api as Edge Functions
   - /public/llms.txt      --> Optional: Direct static version of the file
3. Deploy using `vercel --prod` or through your GitHub-linked project.
4. Visit https://your-domain.com/api/llms to verify it's working.
5. Open your connected Google Sheet to see logs from IPs and bots.
