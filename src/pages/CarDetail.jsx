import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import useCarById from '../hooks/useCarById';
import { useTranslation } from '../contexts/LocalizationContext'; // Импортируем хук для перевода

function CarDetail() {
  const { id } = useParams();
  const { t } = useTranslation(); // Получаем функцию перевода

  const { car, loading, error } = useCarById(id);

  if (loading) return <Loader />;
  // Используем перевод для сообщения об ошибке
  if (error) return <div>{t('carDetail.error', { message: error.message })}</div>;
  // Используем перевод для сообщения "Машину не найдено"
  if (!car) return <div>{t('carDetail.notFound')}</div>;

  return (
    <div className="car-detail" data-aos="fade-zoom">
      {/* Используем перевод для кнопки "Назад" */}
      <Link to="/cars">{t('carDetail.backButton')}</Link>
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      {/* Используем перевод для всех меток характеристик */}
      <p>{t('carDetail.price')} {car.price ? `$${car.price.toLocaleString()}` : t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.oldPrice')} {car.oldPrice ? `$${car.oldPrice.toLocaleString()}` : t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.year')} {car.year || t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.mileage')} {car.mileage ? `${car.mileage.toLocaleString()} ${t('carDetail.miles')}` : t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.color')} {car.color || t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.transmission')} {car.transmission || t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.fuelType')} {car.fuelType || t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.engineSize')} {car.engineSize ? `${car.engineSize} L` : t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.horsepower')} {car.horsepower || t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.driveType')} {car.driveType || t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.bodyType')} {car.bodyType || t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.vin')} {car.vin || t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.condition')} {car.condition || t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.status')} {car.status || t('carDetail.notAvailable')}</p>
      <p>{t('carDetail.added')} {car.addedDate ? new Date(car.addedDate).toLocaleDateString() : t('carDetail.notAvailable')}</p>
      {car.photoList && car.photoList.length > 0 ? (
        <div className="car-photos">
          {car.photoList.map((photo, index) => (
            <img key={index} src={photo} alt={`${car.name} ${index + 1}`} />
          ))}
        </div>
      ) : (
        // Используем перевод для сообщения об отсутствии фото
        <p>{t('carDetail.noPhotos')}</p>
      )}
    </div>
  );
}

export default CarDetail;