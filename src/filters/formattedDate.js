export default function (value) {
  if (value instanceof Date)
    return value.toLocaleDateString()
  else
    return value.toDate().toLocaleDateString()
}