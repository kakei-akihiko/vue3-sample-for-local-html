/* global Vue */
/* eslint no-undef: "error" */
(
  () => {
    const yourNameSection = {
      template: `
      <section>
        {{ message }}
      </section>
      `,
      props: {
        name: {
          type: String,
          default: 'トンヌラ'
        }
      },
      setup (props) {
        const message = Vue.computed({
          get () {
            return `${props.name} というのは どうだろうかっ!?`
          }
        })

        return { message }
      }
    }

    const app = Vue.createApp({
      template: `
        <div>
          <your-name-section :name="name" />
        </div>
      `,
      components: { yourNameSection },
      setup () {
        const name = Vue.ref('ああああ')
        return { name }
      }
    })

    app.mount('#app')
  }
)()
