const CosmicLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl">
      {/* Spinning rings */}
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-cosmic-spin" />
        <div
          className="absolute inset-2 rounded-full border-2 border-accent/40"
          style={{ animation: "cosmic-spin 3s linear infinite reverse" }}
        />
        <div
          className="absolute inset-4 rounded-full border border-primary/20"
          style={{ animation: "cosmic-spin 5s linear infinite" }}
        />
        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-primary/60 animate-pulse-glow blur-sm" />
          <div className="absolute w-4 h-4 rounded-full bg-accent/80" />
        </div>
      </div>
      <p className="font-display text-xl text-foreground glow-text animate-pulse-glow">
        Reading the stars for you...
      </p>
      <p className="text-muted-foreground text-sm mt-2">Mapping your cosmic blueprint</p>
    </div>
  );
};

export default CosmicLoader;
