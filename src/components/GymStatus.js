export default function GymStatus({ gym }) {
  if (!gym) {
    return (
      <div className="Gymstatus">
        <h1>Laddar...</h1>
      </div>
    );
  }
  return (
    <div className="Gymstatus">
      <h4>Beläggning just nu</h4>
      <h1>{gym.name}</h1>
      <div className="progress-bar" id={gym.id}>
        <div
          className="progress-value"
          style={{ width: `${gym.visits}%` }}
        ></div>
      </div>
      <span className="percentage">{gym.visits}%</span>
    </div>
  );
}
