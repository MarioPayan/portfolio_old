import React from 'react'
import {IconButton, Stack, SxProps} from '@mui/material'
import {openInNewTab} from '../utils/utils'
import {Facebook, Instagram, GitHub, WhatsApp, Email, LinkedIn, YouTube} from '@mui/icons-material'

type Style = 'default' | 'white' // TODO: check names

export const SocialMediaIcons = (
  {t, i18n, tKey, style = 'default'}: {t: (key: string) => string; i18n: any; tKey: string; style?: Style},
  showArray: string[] = []
): JSX.Element => {
  const show = (socialMedia: string): boolean => {
    if (i18n.exists(`${tKey}.${socialMedia}`)) {
      return showArray.includes(socialMedia) || showArray.length === 0
    }
    return false
  }

  const iconStyle = (style: Style): SxProps => ({default: {}, white: {color: 'white'}}[style])

  return (
    <Stack direction='row' spacing={1} flexWrap='wrap' display='flex' justifyContent='right'>
      {show('linkedin') && (
        <IconButton aria-label='Linked In' sx={iconStyle(style)} onClick={() => openInNewTab(t(`${tKey}.linkedin`))}>
          <LinkedIn fontSize='large' />
        </IconButton>
      )}
      {show('whatsapp') && (
        <IconButton aria-label='WhatsApp' sx={iconStyle(style)} onClick={() => openInNewTab(t(`${tKey}.whatsapp`))}>
          <WhatsApp fontSize='large' />
        </IconButton>
      )}
      {show('github') && (
        <IconButton aria-label='Git Hub' sx={iconStyle(style)} onClick={() => openInNewTab(t(`${tKey}.github`))}>
          <GitHub fontSize='large' />
        </IconButton>
      )}
      {show('email') && (
        <IconButton aria-label='Email' sx={iconStyle(style)} onClick={() => openInNewTab(t(`${tKey}.email`))}>
          <Email fontSize='large' />
        </IconButton>
      )}
      {show('instagram') && (
        <IconButton aria-label='Instagram' sx={iconStyle(style)} onClick={() => openInNewTab(t(`${tKey}.instagram`))}>
          <Instagram fontSize='large' />
        </IconButton>
      )}
      {show('facebook') && (
        <IconButton aria-label='Facebook' sx={iconStyle(style)} onClick={() => openInNewTab(t(`${tKey}.facebook`))}>
          <Facebook fontSize='large' />
        </IconButton>
      )}
      {show('youtube') && (
        <IconButton aria-label='Youtube' sx={iconStyle(style)} onClick={() => openInNewTab(t(`${tKey}.youtube`))}>
          <YouTube fontSize='large' />
        </IconButton>
      )}
    </Stack>
  )
}
