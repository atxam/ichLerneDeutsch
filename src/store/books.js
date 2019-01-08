import Vue from 'vue'
class Book {
  constructor(id, title, description, imgSrc, level, parts) {
    this.id = id,
      this.title = title,
      this.description = description,
      this.imgSrc = imgSrc,
      this.level = level,
      this.parts = parts
  }
}
export default {
  state: {
    // books: [{
    //     id: 11111111,
    //     title: 'Harry Potter und der Stein der Weisen - 1',
    //     description: 'Первая глава первой книиги',
    //     imgSrc: 'https://www.balticbeach.lv/wp-content/uploads/2017/08/z95pfzfv-hp-billboard.jpg',
    //     level: ['B2', 'C1'],
    //     parts: [{
    //       id: 'part1111111',
    //       title: 'Kapital 1'
    //     }, {
    //       id: 'part2222222',
    //       title: 'Kapital 2'
    //     }, {
    //       id: 'part33333333',
    //       title: 'Kapital 3'
    //     }]
    //   },
    //   {
    //     id: 22222222,
    //     title: 'Harry Potter und der Stein der Weisen - 2',
    //     description: 'Вторая глава первой книиги',
    //     imgSrc: 'https://nerdist.com/wp-content/uploads/2017/09/harry-potter-promo-image.jpeg',
    //     level: ['B1', 'B2'],
    //     parts: [{
    //       id: 'part1111111',
    //       title: 'Kapital 1'
    //     }, {
    //       id: 'part2222222',
    //       title: 'Kapital 2'
    //     }, {
    //       id: 'part33333333',
    //       title: 'Kapital 3'
    //     }]
    //   },
    //   {
    //     id: 333333333,
    //     title: 'Harry Potter und der Stein der Weisen - 3',
    //     description: 'Третья глава первой книиги',
    //     imgSrc: 'https://www.pambazuka.org/sites/default/files/styles/flexslider_full/public/field/image/EW_Harry-Potter_Featured.jpg?itok=XphMvnG2',
    //     level: ['A2', 'C1'],
    //     parts: [{
    //       id: 'part1111111',
    //       title: 'Kapital 1'
    //     }, {
    //       id: 'part2222222',
    //       title: 'Kapital 2'
    //     }, {
    //       id: 'part33333333',
    //       title: 'Kapital 3'
    //     }]
    //   }
    // ],
    books: [],

    bookParts: [{
      bookId: 11111111,
      bookTitle: 'Harry Potter und der Stein der Weisen - 1',
      partId: 'part1111111',
      partTitle: 'Kapital 1',
      paragraphs: [{
          sentences: [{
              origText: 'In modernen Unternehmen laufen sehr viele Arbeitsvorgänge automatisch ab. Ständig automatisieren alle heutigen Hersteller ihre Fertigungsprozesse.',
              transText: 'На современном предприятии очень многие технологические процессы протекают автоматически. Все сегодняшние производители постоянно автоматизируют процессы производства.'
            },
            {
              origText: 'Mit jeder weiteren Automatisierung werden zahlreiche Arbeitsplätze unnötig. Also die Automatisierung hat ganz unterschiedliche Nach- und Vorteile für Arbeiter und Arbeitgeber.',
              transText: 'С каждой новой ступенью автоматизации становятся ненужными многочисленные рабочие места. Таким образом, автоматизация имеет совершенно различные недостатки и преимущества.'
            },
            {
              origText: 'Für Arbeiter bedeutet sie ein Risiko, die Arbeit zu verlieren, und für Arbeitgeber bedeutet sie eine Modernisierung mit folgender Reduzierung von Fertigungskosten.',
              transText: 'Для рабочих она означает риск потерять работу, а для работодателей она означает модернизацию с последующим снижением расходов на производство.'
            },
          ]
        },
        {
          sentences: [{
              origText: 'Produktionsroboter erleichtern den Menschen die Arbeit, wobei sie diverse schwere, gesundheitsgefährdende und schmutzige Arbeiten übernehmen. Der Robotereinsatz beschleunigt die Erfüllung von Arbeiten, macht sie günstiger und erhöht dadurch die gesamte Wirtschaftlichkeit der Produktion.',
              transText: 'Промышленные роботы облегчают труд людей, беря на себя выполнение тяжелых, вредных для здоровья и грязных работ. Внедрение роботов ускоряет выполнение работ, ведет к их удешевлению и, как следствие, повышает общую эффективность производства.'
            },
            {
              origText: 'Andererseits führt der Robotereinsatz zu Massenentlassungen der Arbeiter. Die verbleibenden Facharbeiter müssen qualifiziert werden, um komplizierte Maschinen und Roboter bedienen zu können.',
              transText: 'С другой стороны, использование роботов приводит к массовым увольнениям рабочих. Остающиеся специалисты должны получать соответствующую квалификацию, чтобы быть в состоянии обслуживать сложные станки и робототехнику.'
            },
            {
              origText: 'Obwohl die Investitionen für Roboter ziemlich hoch sind, rentieren sie sich schnell und reduzieren die Fertigungskosten. Dadurch wird die Konkurrenzfähigkeit des Unternehmens auf dem Markt erhöht.',
              transText: 'Хотя инвестиции в робототехнику достаточно высоки, они быстро окупаются и снижают производственные расходы. Вследствие этого растет конкурентоспособность предприятия на рынке.'
            }
          ]
        }

      ],
      words: [{
          origWord: 'Hallo',
          transWord: 'Привет'
        },
        {
          origWord: 'Hallo 2',
          transWord: 'Привет'
        },
        {
          origWord: 'Hallo 3',
          transWord: 'Привет'
        },
        {
          origWord: 'Hallo 4',
          transWord: 'Привет'
        },
        {
          origWord: 'Hallo 5',
          transWord: 'Привет'
        },
        {
          origWord: 'Hallo 6',
          transWord: 'Привет'
        },
        {
          origWord: 'Hallo 7',
          transWord: 'Привет'
        },
        {
          origWord: 'Hallo 8',
          transWord: 'Привет'
        }
      ]
    }]
  },
  mutations: {
    setBooks(state, payload) {
      state.books = payload
    }
  },
  actions: {
    async fetchBooks({ //FETCH BOOKS
      commit
    }) {
      try {
        commit('setLoading', true)
        commit('clearError')
        console.log('fetchBooks')

        let books = [];

        let querySnapshot = await Vue.$db.collection('books').get();
        querySnapshot.forEach(doc => {
          let data = doc.data()
          let parts = [];

          if (data.parts) {
            data.parts.forEach(p => {
              let part = {
                id: p.id,
                title: p.title
              }
              parts.push(part)
            })
          }

          books.push(new Book(doc.id, data.title, data.description, data.imgSrc, data.level.slice(0), parts))
        })

        commit('setBooks', books)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
      }
    }
  },
  getters: {
    getBooks(state) {
      return state.books
    },
    getBookById(state) {
      return id => state.books.find(b => b.id == id)
    },
    getBookPartById(state) {
      return (bookId, partId) => state.bookParts.find(p => p.bookId == bookId && p.partId == partId)
    }
  }
}