import { API } from '../services';
import { useSocialNetworkStore } from '../stores/useSocialNetworkStore';

export const useSocialNetwork = () => {
  const { items, setItems } = useSocialNetworkStore();

  const getAll = async () => {
    // const loader = $loading.show();
    try {
      const { data } = await API.socialNetworkService.getAll({
        select: 'icon,link',
        status: 'eq.true',
      });
      setItems(data);
      //   loader.hide();
    } catch (error) {
      console.error('useSocialNetwork.getAll', error);
      //   loader.hide();
    }
  };

  return { items, getAll };
};
