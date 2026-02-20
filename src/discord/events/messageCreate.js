export default (message) => {
    /*
    Message {
      channelId: '871698832981909604',
      guildId: '448897022699896863',
      id: '1474088142435913970',
      createdTimestamp: 1771520400390,
      type: 0,
      system: false,
      content: 'asd',
      author: User {
        id: '364567188587413515',
        bot: false,
        system: false,
        flags: UserFlagsBitField { bitfield: 128 },
        username: 'andreas_mrk1230',
        globalName: 'Andreas',
        discriminator: '0',
        avatar: '8bacdde4814d4c8f464179c7d4967c06',
        banner: undefined,
        accentColor: undefined,
        avatarDecoration: null,
        avatarDecorationData: {
          asset: 'a_8d31b6b853913a2811916a2d8678b747',
          skuId: '1420225379246805012'
        },
        collectibles: null,
        primaryGuild: {
          identityGuildId: null,
          identityEnabled: false,
          tag: null,
          badge: null
        }
      },
      pinned: false,
      tts: false,
      nonce: '1474088145963188224',
      embeds: [],
      components: [],
      attachments: Collection(0) [Map] {},
      stickers: Collection(0) [Map] {},
      position: null,
      roleSubscriptionData: null,
      resolved: null,
      editedTimestamp: null,
      reactions: ReactionManager { message: [Circular *1] },
      mentions: MessageMentions {
        everyone: false,
        users: Collection(0) [Map] {},
        roles: Collection(0) [Map] {},
        _members: null,
        _channels: null,
        _parsedUsers: null,
        crosspostedChannels: Collection(0) [Map] {},
        repliedUser: null
      },
      webhookId: null,
      groupActivityApplication: null,
      applicationId: null,
      activity: null,
      flags: MessageFlagsBitField { bitfield: 0 },
      reference: null,
      interactionMetadata: null,
      interaction: null,
      poll: null,
      messageSnapshots: Collection(0) [Map] {},
      call: null
    }

     */

    console.log(`${message.author} said: ${message.content}`);

}