import React from 'react'
import {IconButton, Stack} from '@mui/material'
import {openInNewTab} from '../utils/utils'
import {
  Facebook,
  Instagram,
  GitHub,
  WhatsApp,
  Email,
  LinkedIn,
  YouTube
} from '@mui/icons-material'

export const SocialMediaIcons = (
  {t, i18n, tKey}: { t: (key: string) => string; i18n: any; tKey: string },
  showArray: string[] = []
) => {
  const show = (socialMedia: string) => {
    if (i18n.exists(`${tKey}.${socialMedia}`)) {
      return showArray.includes(socialMedia) || showArray.length === 0
    }
    return false
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      flexWrap="wrap"
      display="flex"
      justifyContent="right">
      {show('linkedin') && (
        <IconButton
          aria-label="Linked In"
          onClick={() => openInNewTab(t(`${tKey}.linkedin`))}>
          <LinkedIn />
        </IconButton>
      )}
      {show('whatsapp') && (
        <IconButton
          aria-label="Whatsapp"
          onClick={() => openInNewTab(t(`${tKey}.whatsapp`))}>
          <WhatsApp />
        </IconButton>
      )}
      {show('github') && (
        <IconButton
          aria-label="Git Hub"
          onClick={() => openInNewTab(t(`${tKey}.github`))}>
          <GitHub />
        </IconButton>
      )}
      {show('email') && (
        <IconButton
          aria-label="Email"
          onClick={() => openInNewTab(t(`${tKey}.email`))}>
          <Email />
        </IconButton>
      )}
      {show('instagram') && (
        <IconButton
          aria-label="Instagram"
          onClick={() => openInNewTab(t(`${tKey}.instagram`))}>
          <Instagram />
        </IconButton>
      )}
      {show('facebook') && (
        <IconButton
          aria-label="Facebook"
          onClick={() => openInNewTab(t(`${tKey}.facebook`))}>
          <Facebook />
        </IconButton>
      )}
      {show('youtube') && (
        <IconButton
          aria-label="Youtube"
          onClick={() => openInNewTab(t(`${tKey}.facebook`))}>
          <YouTube />
        </IconButton>
      )}
    </Stack>
  )
}
