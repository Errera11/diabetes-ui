<script setup lang='ts'>
import Typography from '~/components/common/Typography.vue'

const blocks = [
  {
    header: 'Что такое диабет?',
    description: 'Диабет — это хроническое заболевание, связанное с нарушением обмена глюкозы в организме. Узнайте о типах диабета, их симптомах и причинах возникновения. Мы поможем вам понять, как работает ваш организм и что можно сделать для улучшения качества жизни.',
  },
  {
    header: 'Что такое диабет?',
    description: 'Диабет — это хроническое заболевание, связанное с нарушением обмена глюкозы в организме. Узнайте о типах диабета, их симптомах и причинах возникновения. Мы поможем вам понять, как работает ваш организм и что можно сделать для улучшения качества жизни.',
  },
  {
    header: 'Что такое диабет?',
    description: 'Диабет — это хроническое заболевание, связанное с нарушением обмена глюкозы в организме. Узнайте о типах диабета, их симптомах и причинах возникновения. Мы поможем вам понять, как работает ваш организм и что можно сделать для улучшения качества жизни.',
  },

  {
    header: 'Советы по управлению диабетом',
    description: 'Управление диабетом начинается с правильного питания, физической активности и регулярного контроля уровня сахара в крови.',
  },
  {
    header: 'Поддержка и сообщество',
    description: 'Вы не одиноки! Присоединяйтесь к нашему сообществу, где люди делятся своими историями, задают вопросы и поддерживают друг друга. Вместе мы сможем больше!',
  },
  {
    header: 'Новости и исследования',
    description: 'Будьте в курсе последних научных открытий и новостей в мире диабета. Мы публикуем только проверенную информацию, чтобы вы могли принимать обоснованные решения о своем здоровье.',
  },
]
</script>

<template>
  <div>
    <div class="infoBlock">
      <div class="infoBlock__table">
        <ul class="infoBlock__list">
          <li v-for="item in blocks" :key="item.header" class="infoBlock__listItem">
            <Typography variant="h4" color="dark">
              {{ item.header }}
            </Typography>
            <Typography variant="span" color="dark">
              {{ item.description }}
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.infoBlock {
    background: url("https://static.wixstatic.com/media/74f558_cd2f85e90b1943d99eff2be092a09b73~mv2.jpeg/v1/fill/w_980,h_822,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/74f558_cd2f85e90b1943d99eff2be092a09b73~mv2.jpeg") center center no-repeat fixed;
    background-size: cover;
    padding: 70px 200px;
    overflow: clip;

    &__table {
      padding: 15px 20px;
      background: white;
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1px;
      background: black;
      border: 1px solid black;
      max-width: 100%;
    }

    &__listItem {
      background: white;
      padding: 30px 40px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
