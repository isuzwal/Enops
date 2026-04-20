import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$9",
    period: "/month",
    description: "Perfect for individuals exploring AI schema design.",
    features: [
      "5 AI schema generations / mo",
      "Up to 3 projects",
      "Export to SQL & JSON",
      "Community support",
      "Basic visualizations",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For developers shipping production-ready systems.",
    features: [
      "Unlimited AI generations",
      "Unlimited projects",
      "Export SQL, JSON, Prisma & more",
      "Priority support",
      "Advanced visualizations",
      "Schema version history",
      "Team collaboration (3 seats)",
    ],
    cta: "Try Pro Version",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large teams needing security, scale, and control.",
    features: [
      "Everything in Pro",
      "Unlimited team seats",
      "SSO & SAML support",
      "Custom export pipelines",
      "Dedicated account manager",
      "SLA & uptime guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-20 px-4 ">
      <div className="max-w-xl mx-auto text-center mb-14">
        <h2 className="text-3xl lg:text-4xl font-bold font-sans tracking-tight text-foreground">
          Choose Your Plan
        </h2>
        <p className=" text-foreground/60 font-sans text-sm lg:text-base">
          Affordable and adaptable pricing to suit your goals — start free,
          scale when ready.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
        {plans.map((plan) =>
          plan.highlighted ? (
            <div
              key={plan.name}
              className="relative rounded-2xl p-px overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #FE9A00 0%, #FFCA6B 45%, #FF6B00 100%)",
                boxShadow:
                  "0 0 0 1px rgba(254,154,0,0.15), 0 24px 64px -12px rgba(254,154,0,0.4)",
              }}
            >
              {/* Dark inner surface */}
              <div className="relative h-full bg-neutral-950 rounded-[calc(1rem-1px)] flex flex-col p-6 overflow-hidden">
                {/* Subtle dot-grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <div
                  className="absolute -top-12 -right-12 w-52 h-52 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(254,154,0,0.25) 0%, transparent 70%)",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Badge */}
                  <span
                    className="self-start text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 text-neutral-900"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE9A00 0%, #FFCA6B 100%)",
                    }}
                  >
                    {plan.badge}
                  </span>

                  <h3 className="text-xl font-bold font-sans text-white">
                    {plan.name}
                  </h3>
                  <p className="text-white/40 text-xs font-sans mt-1 mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-5xl font-extrabold font-sans leading-none text-white">
                      {plan.price}
                    </span>
                    <span className="text-white/40 font-sans text-sm mb-1">
                      {plan.period}
                    </span>
                  </div>

                  <button
                    className="w-full py-2 rounded-lg font-sans font-medium text-sm mb-6 text-neutral-900 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE9A00 0%, #FFCA6B 100%)",
                    }}
                  >
                    {plan.cta} →
                  </button>

                  <div className="h-px bg-white/10 mb-5" />

                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm font-sans text-white/70"
                      >
                        <span
                          className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: "rgba(254,154,0,0.2)" }}
                        >
                          <Check size={10} strokeWidth={3} color="#FE9A00" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={plan.name}
              className="relative rounded-2xl mt-5  border border-border bg-card flex flex-col p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md"
            >
              <h3 className="text-xl font-bold font-sans text-primary">
                {plan.name}
              </h3>
              <p className="text-foreground/50 text-xs font-sans mt-1 mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-extrabold font-sans leading-none text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-foreground/40 font-sans text-sm mb-1">
                    {plan.period}
                  </span>
                )}
              </div>

              {/* CTA button */}
              <button className="w-full py-2.5 rounded-xl font-sans font-semibold text-sm mb-6 border border-primary/40 text-primary bg-primary/5 hover:bg-primary/10 transition-all duration-200 active:scale-[0.98]">
                {plan.cta} →
              </button>

              {/* Divider */}
              <div className="h-px bg-border mb-5" />

              {/* Feature list */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm font-sans text-foreground/70 "
                  >
                    <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check
                        size={10}
                        strokeWidth={3}
                        className="text-primary"
                      />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </div>

      {/* Footer note */}
      <p className="text-center text-foreground/40 text-xs mt-10 font-sans">
        All plans include a 14-day free trial. No credit card required.
      </p>
    </section>
  );
};
