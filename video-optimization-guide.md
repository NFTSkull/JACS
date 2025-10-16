# 🚀 Guía de Optimización de Video Hero

## 📹 Generar Poster del Video

```bash
# Generar poster desde el segundo 2 del video
ffmpeg -i "video hero.mp4" -ss 00:00:02.000 -vframes 1 hero-poster.webp

# Alternativa: Generar poster en formato PNG
ffmpeg -i "video hero.mp4" -ss 00:00:02.000 -vframes 1 hero-poster.png
```

## 🎬 Optimizar Video para Web

### 1. Convertir a WebM (formato más eficiente)
```bash
# Convertir a WebM con compresión optimizada
ffmpeg -i "video hero.mp4" -c:v libvpx-vp9 -crf 30 -b:v 2500k -maxrate 3500k -bufsize 5000k -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" -r 30 -c:a libopus -b:a 128k "video-hero.webm"
```

### 2. Optimizar MP4 (fallback)
```bash
# Optimizar MP4 con H.264
ffmpeg -i "video hero.mp4" -c:v libx264 -crf 23 -preset medium -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" -r 30 -c:a aac -b:a 128k -movflags +faststart "video-hero.mp4"
```

## 📊 Especificaciones de Optimización

- **Resolución**: 1920x1080 (1080p)
- **Frame Rate**: 30fps
- **Bitrate**: 2000-3500 kbps
- **Formato WebM**: VP9 codec (mejor compresión)
- **Formato MP4**: H.264 codec (compatibilidad)
- **Audio**: 128kbps (si aplica)

## 🎯 Beneficios de la Optimización

✅ **Reducción de peso**: 70-80% menos tamaño
✅ **Carga instantánea**: Poster visible inmediatamente
✅ **Rendimiento web**: No bloquea el render inicial
✅ **Compatibilidad**: WebM + MP4 fallback
✅ **UX mejorada**: Sin flash blanco/negro
✅ **SEO optimizado**: Carga rápida = mejor ranking

## 📁 Archivos Requeridos

Después de la optimización, necesitas estos archivos:
- `video-hero.webm` (formato principal)
- `video-hero.mp4` (fallback)
- `hero-poster.webp` (imagen de carga)

## 🔧 Comandos de Instalación FFmpeg

### macOS (Homebrew)
```bash
brew install ffmpeg
```

### Ubuntu/Debian
```bash
sudo apt update
sudo apt install ffmpeg
```

### Windows
Descargar desde: https://ffmpeg.org/download.html
