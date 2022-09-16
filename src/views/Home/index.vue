<template>
  <div>
    <Nav></Nav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Like from './Like'
import Recommend from './Recommend'
import Rank from './Rank'
import Floor from './Floor'
import Brand from './Brand'

export default {
  name: 'Home',
  components: {
    ListContainer,
    Like,
    Recommend,
    Rank,
    Floor,
    Brand,
}
}
</script>

