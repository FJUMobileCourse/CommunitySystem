import React, { Component } from 'react';
import { View, Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export default function Board() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem bordered>
              <Body>
                <Text>
                  公告1
                </Text>
                <Text>
                </Text>
                <Text>
                親愛的住戶們大家好，由於第一屆管委們已經卸任，目前社區事務已經交由第二屆管委們接續處理，在社區事務已經慢慢上軌道的此時，暫時決定停止維護此資訊平台，還請大家見諒。謝謝。
                </Text>
                <Text>
                </Text>
                <Text>
                2020年12月22日</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Text>
                  公告2
                </Text>
                <Text>
                </Text>
                <Text>
                  社區公告讓社區住戶里民不錯過第一手消息，管委會更多了項工具發布重要訊息。線上E化環保更有效率!!!!
                </Text>
                <Text>
                </Text>
                <Text>
                2020年12月23日</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }