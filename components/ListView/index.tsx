'use client';

// Libraries
import { useEffect, useState } from "react";
import { Card, Container } from "@mantine/core";

// Components
import BaseView from '@/components/BaseView';

// Utilities
import { getServerInstance } from "@/utilities/server";

type Props = {
  model: string;
  filter: object;
  modifier: React.ReactNode;
};

const ListView: React.FC<Props> = ({ model, filter, modifier }) => {

  const [ hasMore, setHasMore ] = useState<boolean>(true);
  const [ objectList, setObjectList ] = useState<object[]>([]);
  const [ pageNumber, setPageNumber ] = useState<number>(1);

  const onBottomReached = () => {
    if (hasMore) {
      setPageNumber(pageNumber + 1);
    }
  };

  const fetchPageItems = async (page: number) => {
    try {
      const serverInstance = await getServerInstance();
      const { data } = await serverInstance.post(`/search/${model}`, {
        page,
        filter,
      });
      setHasMore(data.hasMore);
      const newObjectList = [ ...objectList ].concat(data.searchResult);
      setObjectList(newObjectList);
    }
    catch (error) {
      console.error(error);
    }
    finally {
    }
  };

  useEffect(() => {
    setHasMore(true);
    setObjectList([]);
    setPageNumber(1);
  }, [ filter ]);

  useEffect(() => {
    fetchPageItems(pageNumber);
  }, [ pageNumber ]);

  return (
    <BaseView
      modifier={modifier}
      scrollable={true}
      onBottomReached={onBottomReached}
    >
      <Container p="md">
        {objectList.map((object, index) => {
          return (
            <Card
              key={index}
              shadow='lg'
              withBorder={true}
            >
              {JSON.stringify(object)}
            </Card>
          );
        })}
      </Container>
    </BaseView>
  );

};

export default ListView;
