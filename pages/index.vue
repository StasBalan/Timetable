<template>
  <section class="timetable">
    <div class="inner">
      <h1 class="inner__title">
        Расписание занятий
      </h1>

      <div class="inner__tabs">

      </div>

      <div class="table">
        <div class="table__header">
          <p>Предмет</p>
          <p>Тип</p>
          <p>Начало</p>
          <p>Конец</p>
          <p>Аудитория</p>
          <p>Преподователь</p>
        </div>
        <div class="table__item" v-for="item of table" :key="item.id">
          <p class="subject">{{ item.subject }}</p>
          <p>{{ item.type }}</p>
          <p>{{ item.start }}</p>
          <p>{{ item.end }}</p>
          <p>{{ item.classroom }}</p>
          <p>{{ item.teacher }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'bounce',
  components: {
  },
  data: () => ({
    table: [
      {
        id: 1,
        subject: 'Математика',
        type: 'Зачет',
        start: '12:20',
        end: '13:40',
        classroom: '205Г',
        teacher: 'Гурьева Н.А.'
      },
      {
        id: 2,
        subject: 'КПЯП',
        type: 'Экзамен',
        start: '11:20',
        end: '15:40',
        classroom: '301Д',
        teacher: 'Пяткин П.П.'
      }
    ]
  }),
}
</script>
