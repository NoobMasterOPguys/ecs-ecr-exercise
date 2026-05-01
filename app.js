const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const uptime = Math.floor(process.uptime());
    const containerId = process.env.HOSTNAME || 'Unknown Container';
    
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AWS ECS/ECR Demo</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    overflow: hidden;
                }
                .container {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    padding: 3rem;
                    border-radius: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    text-align: center;
                    max-width: 600px;
                    width: 90%;
                    animation: fadeIn 1s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    background: linear-gradient(to right, #60a5fa, #a78bfa);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                p {
                    font-size: 1.1rem;
                    color: #94a3b8;
                    margin-bottom: 2rem;
                }
                .status-badge {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    background: rgba(34, 197, 94, 0.2);
                    color: #4ade80;
                    border-radius: 9999px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    border: 1px solid rgba(34, 197, 94, 0.3);
                    margin-bottom: 2rem;
                }
                .metadata {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    text-align: left;
                    background: rgba(0, 0, 0, 0.2);
                    padding: 1.5rem;
                    border-radius: 1rem;
                    font-family: monospace;
                    font-size: 0.9rem;
                }
                .label { color: #64748b; }
                .value { color: #f8fafc; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="status-badge">● System Operational</div>
                <h1>ECR & ECS Running!</h1>
                <p>Aplikasi sederhana ini berhasil dideploy menggunakan Docker, di-push ke Amazon ECR, dan dijalankan di Amazon ECS Fargate.</p>
                
                <div class="metadata">
                    <div class="label">Container ID:</div>
                    <div class="value">${containerId}</div>
                    <div class="label">Uptime:</div>
                    <div class="value">${uptime} seconds</div>
                    <div class="label">Environment:</div>
                    <div class="value">Production</div>
                    <div class="label">Region:</div>
                    <div class="value">ap-southeast-1</div>
                </div>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`);
});
