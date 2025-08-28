/**
 * Razorpay integration utilities
 */

interface RazorpayOptions {
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

/**
 * Loads the Razorpay SDK and opens the payment modal
 */
export const initRazorpay = (options: RazorpayOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      try {
        const razorpay = new (window as any).Razorpay(options);
        razorpay.open();
        resolve();
      } catch (error) {
        reject(error);
      }
    };
    script.onerror = (error) => {
      reject(error);
    };
    document.body.appendChild(script);
  });
};

/**
 * Converts amount to paise (Razorpay requires amount in smallest currency unit)
 */
export const formatAmountForRazorpay = (amount: number): number => {
  return amount * 100; // Convert rupees to paise
};