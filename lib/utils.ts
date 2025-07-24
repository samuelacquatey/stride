export const formatCurrency = (amount: number, currency: string = "GHS"): string => {
    return new Intl.NumberFormat("en-GH", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };
  
  export const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  export const timeSince = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
    const interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + "h ago";
  
    const mins = Math.floor(seconds / 60);
    return mins + "m ago";
  };
  