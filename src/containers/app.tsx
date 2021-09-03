import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useStore } from '../hooks/use-store';

import Promo from './promo';
import NotFound from './not-found';

const SignUp = lazy(() => import('./sign-up'));
const SignIn = lazy(() => import('./sign-in'));
const Contacts = lazy(() => import('./contacts'));

const App = observer(() => {
	const { userStore } = useStore();

	console.log('isCreated', userStore.isCreated);
	console.log('isLogged', userStore.isLogged);

	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Switch>
				<Route exact path='/' component={Promo} />

				<Route path='/signup' render={() => (
					userStore.isCreated ? <Redirect to='/signin' /> : <SignUp />
				)}/>

				<Route path='/signin' render={() => (
					userStore.isLogged ? <Redirect to='/contacts' /> : <SignIn />
				)}/>

				<Route path='/contacts' render={() => (
					userStore.isLogged ? <Contacts /> : <Redirect to='./signin' />
				)} />

				<Route component={NotFound} />
			</Switch>
		</Suspense>
	);
});

export default App;
