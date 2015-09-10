package hello

const (
  // 前台快取時間，使用半天快取
  cacheMaxAge = 60* 60* 12
  // validator快取功能。空字串為不使用validator
  etagValidator = ""
)
