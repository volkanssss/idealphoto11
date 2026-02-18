
import { BlogPost } from '../index';

export const postDIY3: BlogPost = {
    id: 303,
    title: "Lighting 101: How to Get Perfect Photobooth Pictures Every Time",
    slug: "photobooth-lighting-guide",
    excerpt: "Bad lighting ruins great photos. Learn the secrets of diffusion, color temperature, and positioning for flattering portraits.",
    category: "Guides",
    date: "2025-06-20",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    author: {
        name: "Jessica Lee",
        avatar: "https://randomuser.me/api/portraits/women/24.jpg",
        role: "Photographer"
    },
    tags: ["Lighting", "Photography Tips", "Tutorial", "Setup"],
    content: `
    <p class="mb-4">You can have an $8,000 camera and take bad photos. You can have an iPhone 8 and take amazing photos. The difference? Lighting.</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">The Golden Rule: Soften the Light</h2>
    <p class="mb-4">Small light sources create harsh shadows (think flashlight under chin). Big light sources create soft shadows (think cloudy day). Always use a diffuser or a large ring light to wrap light around the face.</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Positioning</h2>
    <p class="mb-4">Place the light slightly above eye level, angled down. This defines the jawline and hides double chins. Never place the light <em>below</em> the face unless you are filming a horror movie.</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Color Temperature (Kelvin)</h2>
    <ul class="list-disc pl-8 mb-4">
        <li><strong>3000K (Warm/Yellow):</strong> Cozy, good for candlelit dinners. Can make skin look orange.</li>
        <li><strong>5600K (Daylight/White):</strong> The standard for beauty. Accurate colors. Best for photobooths.</li>
        <li><strong>6500K (Cool/Blue):</strong> Avoid. Makes people look sickly.</li>
    </ul>
    
    <p class="mb-4">Master these basics, and your <a href="/kpop-photobooth">K-pop style photos</a> will look professional every time.</p>
  `
};
