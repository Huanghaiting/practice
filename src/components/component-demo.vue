 <template>
  <div>
    <template id="com1">
      <p> {{title}}</p>
    </template>

  </div>
</template>

<script>
export default {
  name: 'myCom1',
  data () {
    return {
      title: '子组件一号'
    }
  }
}
</script>
