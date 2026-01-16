// Utility to set the favicon dynamically
export function setFavicon(iconUrl: string) {
  // Remove existing favicon links
  const existingLinks = document.querySelectorAll("link[rel*='icon']");
  existingLinks.forEach((link) => link.remove());

  // Create new favicon link
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = iconUrl;
  
  // Append to head
  document.head.appendChild(link);
}
