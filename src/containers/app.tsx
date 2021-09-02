import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { StoreType } from '../stores/store';

import Promo from './promo';
import NotFound from './not-found';

const SignUp = lazy(() => import('./sign-up'));
const SignIn = lazy(() => import('./sign-in'));
const Contacts = lazy(() => import('./contacts'));

const App = observer(({ store }: { store: StoreType }) => {
	const { userStore, authStore } = store;

	console.log('isCreated', userStore.isCreated);
	console.log('isLogged', userStore.isLogged);

	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Switch>
				<Route exact path='/' component={Promo} />

				<Route path='/signup' render={() => (
					userStore.isCreated ? <Redirect to='/signin' /> : <SignUp store={authStore} />
				)}/>

				<Route path='/signin' render={() => (
					userStore.isLogged ? <Redirect to='/contacts' /> : <SignIn store={authStore} />
				)}/>

				<Route path='/contacts' render={() => (
					userStore.isLogged ? <Contacts store={store} /> : <Redirect to='./signin' />
				)} />

				<Route component={NotFound} />
			</Switch>
		</Suspense>
	);
});

export default App;
