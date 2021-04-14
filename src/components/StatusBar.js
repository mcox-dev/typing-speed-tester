export default function StatusBar({ ended, position, currentLetter, keysBySecond }) {
  return (
    <div className="flex justify-between p-4 shadow rounded">
      <div>
        <span className="text-gray-600 text-lg mr-2">Posición</span>
        <strong className="text-green-600 text-xl">{position}</strong>
      </div>
      <div>
        <span className="text-gray-600 text-lg mr-2">Letra actual</span>
        <strong className="text-green-600 text-xl">{currentLetter || '-'}</strong>
      </div>
      {ended && (<div>
        <span className="text-gray-600 text-lg mr-2">Pulsaciones por segundo</span>
        <strong className="text-green-600 text-xl">{keysBySecond}</strong>
      </div>) || <div>-</div>}
    </div>
  )
}