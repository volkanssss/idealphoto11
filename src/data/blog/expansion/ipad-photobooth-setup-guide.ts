
import { BlogPost } from '../index';

export const postDIY1: BlogPost = {
    id: 301,
    title: "How to Set Up a Photobooth with an iPad and Ring Light",
    slug: "ipad-photobooth-setup-guide",
    excerpt: "The ultimate minimalist setup. Turn your iPad into a professional photobooth gathering machine in 3 easy steps.",
    category: "Guides",
    date: "2025-06-05",
    imageUrl: "https://images.unsplash.com/photo-1590760468965-02c33eb7e560?auto=format&fit=crop&w=800&q=80",
    author: {
        name: "Tom Barker",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        role: "Tech Reviewer"
    },
    tags: ["DIY", "iPad", "Setup Guide", "Hardware"],
    content: `
    <p class="mb-4">You have an iPad. You have a party coming up. You don't need to rent a $1000 machine. Here is how to build a pro-level booth for under $100.</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">The Hardware Checklist</h2>
    <ul class="list-disc pl-8 mb-4">
        <li><strong>iPad:</strong> Any model from 2020 onwards works best.</li>
        <li><strong>Ring Light Stand:</strong> Get one with an integrated iPad holder. Cost: ~$40 on Amazon.</li>
        <li><strong>Power Bank:</strong> Essential. internal batteries die in 2 hours. A 20,000mAh bank lasts all night.</li>
    </ul>

    <h2 class="text-2xl font-bold mt-8 mb-4">The Software</h2>
    <p class="mb-4">This is where the magic happens. Don't use the default camera app (it has no timer, no sharing). Use a dedicated <a href="/digibooth">web-based photobooth app</a> like ours. It runs in Safari/Chrome, offers countdowns, filters, and instant QR code sharing.</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Step-by-Step Setup</h2>
    <ol class="list-decimal pl-8 mb-4">
        <li class="mb-2"><strong>Positioning:</strong> Place the stand at eye level (approx 5ft 4in).</li>
        <li class="mb-2"><strong>Lighting:</strong> Set the ring light to "Daylight" (5600K) for the most flattering skin tones.</li>
        <li class="mb-2"><strong>Guided Access:</strong> Enable "Guided Access" in iOS settings. This locks the iPad to the browser so guests can't snoop through your emails.</li>
    </ol>

    <p class="mb-4">That's it. You now have a sleek, modern photobooth that fits in your backpack.</p>
  `
};
