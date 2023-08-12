import { signIn, useSession } from "next-auth/client";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export function SubscribeButton() {
  const [session] = useSession();
  const router = useRouter();

  // https://gb-ignews.vercel.app/api/auth

  /*
  
  STRIPE_SUCCESS_URL=https://gb-ignews.vercel.app/posts
STRIPE_CANCEL_URL=https://gb-ignews.vercel.app/


GITHUB
https://gb-ignews.vercel.app
https://gb-ignews.vercel.app/api/auth
  */

  async function handleSubscribe() {
    if (!session) {
      console.log("NO SESSION");
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
      console.log("HAS SESSION");
      router.push("/posts");
      return;
    }

    try {

      console.log("AQIUAISUHDIUASHUDI");
      const response = await api.post("api/auth/subscribe");
      console.log("AQIUAISUHDIUASHUDI----2");
      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      
      alert(err.message);
    }
  }
//631565d35783347418893a12df5c7f287347cd12
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
