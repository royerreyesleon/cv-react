import { useAboutStore } from '../stores/useAboutStore';
import { API } from '../services';

export const useAbout = () => {
  const { items, setItems } = useAboutStore();

  const getAll = async () => {
    // const loader = $loading.show();
    try {
      const { data } = await API.aboutService.getAll({
        select: 'address,birth,curp,description_en,description_es,email,name,phone,rfc',
        status: 'eq.true',
      });
      setItems(data);
      //   loader.hide();
    } catch (error) {
      console.error('useAbout.getAll', error);
      //   loader.hide();
    }
  };

  return { items, getAll };
};
