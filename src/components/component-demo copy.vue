 <template>
  <div>
    <template id="com2">
      <p> {{title}}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'myCom2',
  data () {
    return {
      title: '子组件二号'
    }
  }
}
</script>
