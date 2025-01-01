export default {
  state: {
    languages: [
      {
        id: 'python',
        name: 'Python',
        description: 'Python, öğrenmesi kolay ve çok yönlü bir programlama dilidir.',
        features: ['Kolay okunabilir sözdizimi', 'Zengin kütüphane desteği', 'Geniş kullanım alanı']
      },
      // Diğer diller...
    ]
  },
  getters: {
    getLanguageById: (state) => (id) => {
      return state.languages.find(lang => lang.id === id)
    }
  }
} 