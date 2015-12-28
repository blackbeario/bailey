const publicRedirect = () => {
  if ( Meteor.userId() ) {
    FlowRouter.go( 'index' );
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});
 
publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    ReactLayout.render( 'default', { yield: 'signup' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    ReactLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    ReactLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    ReactLayout.render( 'default', { yield: 'resetPassword' } );
  }
});
