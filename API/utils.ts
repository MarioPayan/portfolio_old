export const getKeyFromLabel = (label: string) => label.toLocaleLowerCase().replace(" ", "-")
export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer")
  if (newWindow) newWindow.opener = null
}
export const image404 = "404.jpg"
