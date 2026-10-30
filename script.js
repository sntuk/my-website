// AI Travel Guide - Portsmouth
document.addEventListener('DOMContentLoaded', function() {
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    // Welcome message
    const welcomeMessage = {
        type: 'bot',
        content: `<p>Hi there! 👋 I'm your <strong>Portsmouth local guide</strong>. I'm here to help you plan an amazing visit to the city.</p>
                 <p>Just tell me: <strong>Where are you staying?</strong>, <strong>How many days do you have?</strong>, and <strong>What interests you most?</strong> (history, food, hidden gems, families, etc.)</p>`
    };

    // Add message to chat
    function addMessage(message, type) {
        const msg = document.createElement('div');
        msg.className = `msg ${type}`;
        msg.innerHTML = message;
        chatMessages.appendChild(msg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle form submission
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = chatInput.value.trim();
        if (!input) return;

        // Add user message
        addMessage(`<p><strong>You:</strong> ${input}</p>`, 'user');
        chatInput.value = '';

        // Generate bot response
        setTimeout(() => {
            const response = generateResponse(input);
            addMessage(response, 'bot');
        }, 800);
    });

    // Generate response based on user input
    function generateResponse(input) {
        const lower = input.toLowerCase();

        // Greeting
        if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
            return `<p>Hi there! 👋 Welcome to Portsmouth! I'm your local guide.</p>
                     <p>Tell me: <strong>Where are you staying?</strong>, <strong>How many days?</strong>, and <strong>What interests you?</strong> (history, food, beaches, family-friendly, etc.)</p>`;
        }

        // Historic Dockyard
        if (lower.includes('dockyard') || lower.includes('historic dockyard')) {
            return `<p>The <strong>Historic Dockyard</strong> is a must-visit! Here's a quick guide:</p>
                     <p><strong>🚢 HMS Warrior (1860)</strong> — Britain's first ironclad warship, now a floating museum.</p>
                     <p><strong>⚓ Mary Rose (1545)</strong> — King Henry VIII's flagship, raised from the seabed in 1982.</p>
                     <p><strong>💡 Tip:</strong> Book tickets online in advance — they sell out!</p>
                     <p>Starting at 6 AM, you can catch the first ship. It's less crowded and magical!</p>`;
        }

        // Historic Castle / Old Portsmouth
        if (lower.includes('old portsmouth') || lower.includes('castle')) {
            return `<p><strong>Old Portsmouth Castle</strong> is 11th century — you're walking on Norman ground!</p>
                     <p><strong>What to do:</strong></p>
                     <ul>
                         <li>Walk the ramparts for panoramic views</li>
                         <li>See the Royal Navy Museum (free entry)</li>
                         <li>Explore Spinnenheide (spider meadow) for local wildlife</li>
                         <li>Enjoy the atmospheric courtyard cafes</li>
                     </ul>
                     <p>Best time to visit: Late afternoon when the light hits the castle walls.</p>`;
        }

        // Hidden gems
        if (lower.includes('hidden') || lower.includes('secret') || lower.includes('gem')) {
            return `<p>Here are some <strong>hidden gems</strong> locals love:</p>
                     <p><strong>🏞️ Portchester Castle</strong> — Just 2 miles away, with a stunning keep and Roman wall. Largely unnoticed by tourists!</p>
                     <p><strong>🌿 Southsea Common</strong> — 130 acres of green space with stunning views of the Solent. Great for a sunset walk.</p>
                     <p><strong>🏙️ Gunwharf Quays</strong> — Rooftop bars, the VW Type 2 in the water, and sunset views.</p>
                     <p><strong>🍷 The Point</strong> — Last working fishing port. Ask locals where the best seafood is!</p>`;
        }

        // Itineraries
        if (lower.includes('itinerary') || lower.includes('day') || lower.includes('plan')) {
            return `<p>Here's a <strong>1-Day Express Itinerary</strong> for Portsmouth:</p>
                     <p><strong>6:00 AM</strong> — Breakfast at The Point (fresh fish, right on the working harbour)</p>
                     <p><strong>8:30 AM</strong> — Historic Dockyard (book tickets online!)</p>
                     <p><strong>12:30 PM</strong> — Lunch at the Dockyard (try the British food)</p>
                     <p><strong>2:00 PM</strong> — King Richard's Castle (photography + history)</p>
                     <p><strong>4:30 PM</strong> — Old Portsmouth Castle</p>
                     <p><strong>7:00 PM</strong> — Dinner in Gunwharf Quays</p>
                     <p><strong>9:00 PM</strong> — Sunset at the Solent</p>
                     <p>Want a 3-day plan, family version, or something specific? Tell me your preferences!</p>`;
        }

        // Family friendly
        if (lower.includes('family') || lower.includes('kids') || lower.includes('children')) {
            return `<p>For families, here's the best Portsmouth combo:</p>
                     <p><strong>Day 1:</strong> Dockyard (Warrior + Mary Rose) → Gunwharf Quays (fun, shops, tech) → Pompey Pirates (kids' show)</p>
                     <p><strong>Day 2:</strong> Gunwharf Quays → Southsea Common → Secret Harbour Walks → Beach (Clam shell)</p>
                     <p><strong>Day 3:</strong> Crystal Palace (kids' museum) → Explores & Discovery (interactive) → Sunset at the Solent</p>
                     <p><strong>Tip:</strong> The Dockyard has family rides and a soft play area right next to it!</p>`;
        }

        // Food
        if (lower.includes('food') || lower.includes('eat') || lower.includes('dinner') || lower.includes('restaurant')) {
            return `<p>Portsmouth food scene is amazing! Here's my recommendations:</p>
                     <p><strong>🍕 The Point</strong> — Last working fishing port. Fresh fish and chips, right on the water.</p>
                     <p><strong>🏘️ Local Cafes</strong> — Try The Common (Southsea) for classic British breakfast and afternoon tea.</p>
                     <p><strong>🍝 Gunwharf Quays</strong> — Trendy restaurants, brewery visits, sunset views.</p>
                     <p><strong>🍝 Italian in Old Portsmouth</strong> — Excellent pasta, historic streets, cozy atmosphere.</p>
                     <p><strong>🍫 Chocolate & Coffee</strong> — Great coffee shops around the city centre.</p>`;
        }

        // General inquiry
        if (lower.includes('where') || lower.includes('what') || lower.includes('best') || lower.includes('recommend')) {
            return `<p>Based on your visit, here's my top recommendation:</p>
                     <p><strong>🚢 Start at the Historic Dockyard</strong> — It's the heart of Portsmouth and tells the story of Britain's seafaring history.</p>
                     <p><strong>Then:</strong> Walk through Old Portsmouth, climb King Richard's Castle for views, and end at The Point for dinner with a view of the Solent.</p>
                     <p>Want me to customize this for your specific interests (history, food, families, etc.)? Just tell me more!</p>`;
        }

        // Default response
        return `<p>Great question! 😊 Here's what I suggest:</p>
                 <p><strong>For first-time visitors:</strong> Start at the Historic Dockyard (it's the heart of Portsmouth), then walk through Old Portsmouth, and finish at The Point for sunset.</p>
                 <p><strong>Tip:</strong> Download the city map before you go, and check opening times — some places close on Mondays.</p>
                 <p>Tell me more about your trip and I'll customize this for you!</p>`;
    }
});
