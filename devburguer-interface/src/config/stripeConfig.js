import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

// Carrega o Stripe só quando uma tela de pagamento precisar dele.
// Assim o script do Stripe (e os avisos dele no console) não aparecem
// em todas as páginas do site.
export function getStripe() {
	if (!stripePromise) {
		stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
	}

	return stripePromise;
}
