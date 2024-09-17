const useGenre = (value) => {
  if (value.length < 1) return ""

  const GenreIds = value.map((val) => val.id)
  return GenreIds.reduce((accu, curr) => accu + "," + curr)
}

export default useGenre