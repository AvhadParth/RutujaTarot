function SectionTitle({ kicker, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const descriptionAlignment = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div className={`section-kicker ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-cosmic-gold" />
        {kicker}
      </div>
      <h2 className="section-heading mt-6 text-balance">{title}</h2>
      <p className={`section-copy mt-5 max-w-2xl text-balance ${descriptionAlignment}`}>
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;
