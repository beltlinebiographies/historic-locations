export default function(){
  this.transition(
    this.fromRoute('map'),
    this.toRoute('exhibits'),
    this.use('toUp'),
    this.reverse('toDown')
  );
};
