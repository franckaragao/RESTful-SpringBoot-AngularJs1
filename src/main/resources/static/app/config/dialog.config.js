appCliente.config([ 'dialogsProvider', '$translateProvider', function(dialogsProvider, $translateProvider) {
	dialogsProvider.useBackdrop('static');
	dialogsProvider.useEscClose(false);
	dialogsProvider.useCopy(false);
	dialogsProvider.setSize('sm');

	$translateProvider.preferredLanguage('pt-BR');
} ])