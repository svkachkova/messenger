import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { UserStoreType } from '../store/user-store';

import Promo from './promo';
import NotFound from './not-found';

const SignUp = lazy(() => import('./sign-up'));
const SignIn = lazy(() => import('./sign-in'));
const Contacts = lazy(() => import('./contacts'));

const App = observer(({ store }: { store: UserStoreType }) => {

	console.log('isCreated', store.isCreated);
	console.log('isLogged', store.isLogged);

	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Switch>
				<Route exact path='/' component={Promo} />

				<Route path='/signup' render={() => (
					store.isCreated ? <Redirect to='/signin' /> : <SignUp store={store} />
				)}/>

				<Route path='/signin' render={() => (
					store.isLogged ? <Redirect to='/contacts' /> : <SignIn store={store} />
				)}/>

				<Route path='/contacts' render={() => (
					store.isLogged ? <Contacts store={store} /> : <Redirect to='./signin' />
				)} />

				<Route component={NotFound} />
			</Switch>
		</Suspense>
	);
});

export default App;
