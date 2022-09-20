const YEAR = new Date().getFullYear()

export default {
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Taylor Douthit. All rights reserved.
    </small>
  )
}
