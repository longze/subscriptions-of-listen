// 职场
const job = 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajmDrJPBVgu0jY0ed7Pbt1TNoSjYwRWnNycwqFj8bKZjzrdon5OUUhHg/0?wx_fmt=png';
// 生活
const life = 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajRl0FWWvZ4b3sBLJkvRH76jIdsthawFNDEvvLJSRzXSfGmDFEEX4wPQ/0?wx_fmt=png';
// 兴趣
const interesting = 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajxtYNeXx4icWIfTHWl9XfKIuusANDLEibFrDTIgfRwNplJvHMWJ6F3H7w/0?wx_fmt=png';

module.exports = {
    classificationList: [
        {
            id: 0,
            text: '全部经历'
        },
        {
            id: 1,
            text: '职场发展',
            detailBannerImgUrl: job
        },
        {
            id: 2,
            text: '行业经验',
            detailBannerImgUrl: job
        },
        {
            id: 3,
            text: '兴趣爱好',
            detailBannerImgUrl: interesting
        },
        {
            id: 4,
            text: '前沿科技',
            detailBannerImgUrl: job
        },
        {
            id: 5,
            text: '面试跳槽',
            detailBannerImgUrl: job
        },
        {
            id: 6,
            text: '职场技能',
            detailBannerImgUrl: job
        },
        {
            id: 7,
            text: '生活经验',
            detailBannerImgUrl: life
        }
    ],
    dataList: [
        // 惠宇物料部分
        {
            id: 100,
            // 标题
            title: '产品经理的晋升答辩技巧',
            // 姓名
            name: '惠宇',
            // 微信号
            wechatAccount: 'huiyu9144',
            // 微信二维码
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            // 职业身份
            profession: '百度产品经理',
            // 身份 和 经验 tag
            experienceTag: '答辩失败和成功过',
            // 分类 tag
            classificationId: 1,
            // 地址
            address: '百度科技园',
            // 距离
            distance: '50m',
            // 价格
            price: 50,
            // 见面次数
            faced: 12,
            // 产品描述
            productDes: '我个人经历了答辩失败后，进行了深刻的思考和总结，有了一些心得。应用心得后，成功通过了后续的答辩，希望能分享我的答辩经历和经验技巧，帮助也面临晋升和答辩的朋友顺利通过。',
            // 个人描述，分段落
            stagerDes: [
                '毕业后一直从事产品经理工作，先后在百度地图、旅游、糯米、信息流广告等业务任职 。',
                '有丰富的O2O产品及移动端产品经理经验，熟悉产品方法论，对产品经理职业规划有较丰富经验。希望我的经验能够帮到你。'
            ],
            // 头像 url
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0e79xkz3vTKBCPr5lfxvbJshSMuCKlxFeXxia84Mam6ApGFibxibQw2ia99L5NribMdB5E61bXpZvxSqpg/0?wx_fmt=png',
            // 内容图片url
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0e79xkz3vTKBCPr5lfxvbJsRLLul8kWIe9Odp9mbZHCUxh4xelQbNpnjUmjIsws2VG8FLVXbA1fYw/0?wx_fmt=jpeg'
        },
        // {
        //     id: 2001,
        //     title: 'AA',
        //     name: '吴亮',
        //     wechatAccount: 'Yamatepis',
        //     wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajRdlsgxYvm3b1zs1gY4roEsv9FVr9p02HVrrfDou3TDIiaHRuQuOkn9g/0?wx_fmt=png',
        //     profession: 'aa',
        //     experienceTag: 'bb',
        //     classificationId: 1,
        //     address: '百度科技园',
        //     distance: '50m',
        //     price: 50,
        //     faced: 12,
        //     productDes: '',
        //     stagerDes: [
        //         ''
        //     ],
        //     headerImgUrl: '',
        //     contentImgUrl: ''
        // },
        {
            id: 300,
            title: '手把手带你入门吉他弹唱',
            name: '张润民',
            wechatAccount: 'runmin_zhang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajGVSBCeqd9JyczlKbXJ0M9xb7gB7d4X46icEpiatGDALveUS3KpOY1b1g/0?wx_fmt=jpeg',
            profession: '百度交互设计师',
            experienceTag: '4年吉他爱好者',
            classificationId: 3,
            address: '百度科技园',
            distance: '500m',
            price: 50,
            faced: 6,
            productDes: '4年多的吉他经历，1年多的指弹，主要玩玩押尾桑的曲子，可以聊聊如何入门的问题，以及自学中遇到的坑、瓶颈，或者基础乐理，包括和弦、节奏、音阶等等，以及吉他弹唱基本知识，或者一把吉他如何上台伴奏。',
            stagerDes: [
                '毕业于四川大学，目前就职百度从事交互设计职位。关于吉他经历，学校期间多次参加文艺表演，工作期间参加了百度UXC年会表演。较深刻的研究了关于吉他方面的一些乐理。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0ceFoCYgkHphYeZ1gmIIWBJtUgI89fcleeMQZ5tYRCMJLIlN07JNfneqyVWFDSjLq9NfJCtUgEicsQ/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBl8WU96Uw0KbuwZVjMb4bCeMCzMoa1OrGZbCj8dNuZpXLVt2micnXQMA/0?wx_fmt=png'
        },
        {
            id: 400,
            title: '二流大学的毕业生怎么一步步走进百度',
            name: '赵晓强',
            wechatAccount: 'zhao-xiaoqiang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajqC0Ra6QslQr8dQOiaryC1ZKM4ibzFPicRZs3hY6CXGbiahXkxpv3FqnDbA/0?wx_fmt=jpeg',
            profession: '百度高级工程师',
            experienceTag: '前端工程师',
            classificationId: 1,
            address: '百度科技园',
            distance: '50m',
            price: 50,
            faced: 12,
            productDes: '聊聊我是怎么从一个二流大学非计算机专业的毕业生一步步自我突破最后进入百度的。一路走来很是艰辛，之前面试总是碰壁，但现在我作为面试官我就是别人的那面墙。所以我想和你聊得不仅是简历怎么写实用的面试经验有哪些，而是从面试官和被面试者两个角度来阐述团队需要什么样的人和怎么一步步提升自己。',
            stagerDes: [
                '本人毕业于一所二本大学，非计算机相关专业，毕业后在北京工作，在国企、外企、创业公司都待过，最后入职百度稳定下来。本人天分不算太高，也没遇到什么贵人相助，拼自己的努力一步步打怪升级，其中的迷茫和困难绝对深有体会。',
                '入职百度后负责所在团队前端岗的简历筛选和面试，也帮助其他团队招人，在百度的这段时间里看过的简历上千面试过的人上百，发现了很多共性的问题，这些问题当初我有现在很多人依然有，回看自己的过往，如果现在的自己能给当初的自己一些意见该有多好。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0dvic5iaS3FbJ9LbibQ5YlzdM2LLfrMzXWgofy34NmTJicEuCBDpbDZf1qqKPOUNqhjaZrF1IcFcfmyDA/0?wx_fmt=jpeg',
            contentImgUrl: ''
        },
        {
            id: 401,
            title: '怎么玩转户外',
            name: '赵晓强',
            wechatAccount: 'zhao-xiaoqiang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajqC0Ra6QslQr8dQOiaryC1ZKM4ibzFPicRZs3hY6CXGbiahXkxpv3FqnDbA/0?wx_fmt=jpeg',
            profession: '百度高级工程师',
            experienceTag: '6年户外领队经验',
            classificationId: 1,
            address: '百度科技园',
            distance: '50m',
            price: 50,
            faced: 12,
            productDes: '聊聊怎么寻找靠谱的户外团队。户外锻炼身体愉悦心情花费又比旅游小很多，在北京很幸运的遇到了一个个爱玩的朋友，我把他们聚在一起彼此成了朋友。我们这群人不以盈利为目的，每周在山间谈笑风生。如果你想成为一名驴友，我可以给你一个清单，让你在半年内成为一名合格的驴友一年内成为一名合格的领队，教你如何快速制定符合自己爱好的线路，如何在野外识路，如何处理野在外遇到的各种问题。',
            stagerDes: [
                '6 年的户外经验，6年的时间爬遍北京附近大小山头，积累了大量的户外人脉和经验。',
                '自认为是一名合格的驴友和背包客，除了北京周边的大小山头，国内背包登过泰山的顶吃过成都的辣倒过茶卡盐湖的影转过拉萨的布达拉，国外背包徜徉在曼谷考山路扎营在芭提雅海滩，甚至飞到地球的另一端在美国国会山前留下和爱人的身影。',
                '我愿意和你分享我的经验，经历的人多了发现并不是每个人都能发现旅行的乐趣的，这其中有一部分人面对规划行程困难望而却步，又有一部分人通过旅行社成为了游客却找不到其中的乐趣。我可以和你分享我是怎么快速准备一场旅行和怎么在旅行中找到乐趣的经验。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0dvic5iaS3FbJ9LbibQ5YlzdM2LLfrMzXWgofy34NmTJicEuCBDpbDZf1qqKPOUNqhjaZrF1IcFcfmyDA/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0dvic5iaS3FbJ9LbibQ5YlzdM2luzMhvHfv3wfibmdnQS7Q486NEWyCZ7X2wUQjKVnJk1eSV3TMVibbw5g/0?wx_fmt=jpeg'
        },
        {
            id: 102,
            title: '日本旅游攻略分享',
            name: '郭湘涵',
            wechatAccount: 'huiyu9144',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            profession: '新浪产品经理',
            experienceTag: '去过日本3次',
            classificationId: 3,
            address: '新浪总部大厦',
            distance: '50m',
            price: 100,
            faced: 20,
            productDes: '我个人去过3次日本，日本这个看似方寸之地，其实有着丰富多彩的旅游资源，朋友圈里看到的只是冰山一角～ 只要行前准备做得好，保证玩出和别人不一样的精彩！',
            stagerDes: [
                '在互联网产品领域拥有多年的经验。大学期间陆陆续续设计、制作、开发了十多个网站，边学边积累了经验。领教过n次互联网风潮，目睹周遭的兴衰成败。',
                '对于互联网行业有兴趣的朋友我们可以一起探讨、交流、学习。创新模式也可以一起研究，当然最后还是要落实到产品设计相关话题上。相信有说不完的话题，学不完的知识，探索不完的新兴领域。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5Z2rxeiczsCTYZAVGBxGToicbWhujdIeVqw4dQFxnV6fWPy42clk1QdEg/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5VibyK3eiaJ2A9acmiajDCiaUD89vaWbibAOksLsTQTrSSJOknj91b70XM1g/0?wx_fmt=png'
        },
        {
            id: 104,
            title: '探讨技术人员的职业发展',
            name: '王华',
            wechatAccount: 'huiyu9144',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            profession: '网易技术专家',
            experienceTag: '做技术多年',
            classificationId: 1,
            address: '网易大楼',
            distance: '50m',
            price: 100,
            faced: 11,
            productDes: '我作为一个技术人员，从事互联网开发超过5年，其中包括在百度的3年技术工作，希望能够与同学一起探讨技术职业发展相关的话题。',
            stagerDes: [
                '曾就职于百度，2015年晋升为高级工程师。经历过电商、支付、O2O 等业务的大前端开发和团队管理。做了前端的用户行为系统前身，广泛应用于业务。',
                '后来百度有啊拆分成创业公司，创始团队成员，公司 A 轮 5000w 刀，此时开始逐步接触团队管理工作。一年多时间业务上也经历包括社区，O2O 商城，交易系统。经历创业技术团队之痛，经历创业失败。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5Z1lCNlFgJEFsvOpaoKboA28CChcyNMaLefRzUQyLbhDUMKHicOicia64g/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5jIqoQb7nrKRayVpIfTA3Rib08KibWAS3oDlPU7nXFLfDvd0fNiaNrv3wg/0?wx_fmt=png'
        },
        {
            id: 103,
            title: 'AI产品与传统产品的差异',
            name: '汤浩泽',
            wechatAccount: 'huiyu9144',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            profession: '百度AI产品经理',
            experienceTag: '做过AI也做过传统',
            classificationId: 4,
            address: '软件园二期',
            distance: '50m',
            price: 70,
            faced: 5,
            productDes: '我身处AI行业，遇到过很多坑。你可能不知道，从互联网转型到AI的难度，比从传统行业转型到互联网的难度，更大。一个新的AI PM，可能3~6个月内，都不好意思说话，因为“一说就错”。',
            stagerDes: [
                '身处互联网行业，擅长自然语言处理、机器学习、数据挖掘领域。获得西安交通大学计算机和数学双学位，硕士毕业于哈尔滨工业大学信息检索研究室。 '
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5xOhVjSo79SPYvsrEe9t00gvCDLhsVx5SwIztzJ4icM9J3ibD2iccnt0rw/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5Rw3uTK7YjxFibySpW6zT5iafAO6PXTlicrqO45qAEIwhibCxicJf1TThPkQ/0?wx_fmt=png'
        },
        {
            id: 207,
            title: '聊一聊如何孵化运营一个网红',
            name: '赵小龙',
            wechatAccount: 'Yamatepis',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajRdlsgxYvm3b1zs1gY4roEsv9FVr9p02HVrrfDou3TDIiaHRuQuOkn9g/0?wx_fmt=png',
            profession: '网红孵化工作室',
            experienceTag: '曾任新浪微博产品经理',
            classificationId: 2,
            address: '新浪总部大厦',
            distance: '500m',
            price: 100,
            faced: 13,
            productDes: '曾在新浪微博工作五年，现在创业中，从事孵化网红的项目，我很愿意和你分享一个网红是如何诞生的。',
            stagerDes: [
                '曾任新浪微博产品经理，现在自己组团队组成了网红孵化的工作室。得用户注意力者得天下。可聊产品，可聊运营、可聊网红。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBfc3ic9z2dLXL6kn7UO4GbuPicshPba3OUnBuc7jH21BptKPJS6siaCaNg/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBPMWGdkHLUQ7gDSKIj677dOCC28VlLYKjUxHY4xLtEyINI5AXhWUf5g/0?wx_fmt=png'
        },
        {
            id: 203,
            title: '我是如何通过自媒体月入过万的',
            name: '龙奴电影',
            wechatAccount: 'Yamatepis',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajRdlsgxYvm3b1zs1gY4roEsv9FVr9p02HVrrfDou3TDIiaHRuQuOkn9g/0?wx_fmt=png',
            profession: '自媒体工作者',
            experienceTag: '月收入过万，现已开工作室',
            classificationId: 2,
            address: '辉煌国际大厦',
            distance: '2km',
            price: 100,
            faced: 5,
            productDes: '都说最近三年是自媒体的红利期，我虽然没有能大红大紫，但还是实现了月薪过万，30w+粉丝，我很愿意和你分享我的经历，当然也欢迎你关注我的头条号龙奴电影，一本正经讲电影，生情并茂讲故事',
            stagerDes: [
                '原360产品经理，工作两年后洞悉自媒体红利，毅然辞职后全力投入，现头条号龙奴电影运营者，粉丝30w+，月收入过万，开了自己的工作室。做产品和做内容一样，只要你能懂用户想看什么，需要什么，就能产出好的内容，而好的内容永远是稀缺的，有竞争力的，很期待与各行各业的你相遇，互相制造启发感。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBiauut44PS22l9WggCTrql15T1KzIK9h2dH2YaU7sG2vYlxWMup0EggQ/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxByib4ucNMjcNmdbiavTznr0r5VY76Y8AdH69uuE5ktRZMCP6XlnwSVSXw/0?wx_fmt=png'
        },
        {
            id: 106,
            title: '视觉／交互设计师如何整理作品集？',
            name: '王倩',
            wechatAccount: 'huiyu9144',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            profession: '网易交互设计专家',
            experienceTag: '研究过作品集整理技巧',
            classificationId: 6,
            address: '网易大楼',
            distance: '100m',
            price: 50,
            faced: 23,
            productDes: '我发现无论级别高低，设计师普遍不重视对自己作品集的整理与讲述，其实如果不加整理，这些作品可能也没办法体现你自身的能力点。你需要抓住这来之不易的面试机会，充分地做准备，主动地作表述。',
            stagerDes: [
                '我一直从事用户体验设计工作，它对于我而言不仅是工作，也是兴趣，更是不断探索的过程。小时候读的一本名著《牛虻》里面有一句话一直影响着我，“不管我活着，还是我死去，我都是一只牛虻，快乐地飞来飞去。”我追求精神世界的自由，也追求对生活和工作不断地探索。',
                '“内敛而不内向；沉稳而不沉闷；亲切而不亲热；幽默而不油滑；谨慎而不紧张；隐忍而不隐身”互联网生活中的快节奏，让大多数人浮躁不安，而我在努力沉淀的这几年，逐渐找到了自己的方向。我可以通过分享我的经验，帮助选择走上交互设计的你们，找到你们的未来发展目标。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5tWeQVdpgSWXyzBp4h895HlRq0zsCwvhIungNB5DrichGKvQGYZ6TFRg/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5ribuYfibH9eJb0mvfymVKbZxAK2ZqVZ00TTrxjFXVXFQIZDENUfUEb6w/0?wx_fmt=png'
        },
        {
            id: 101,
            title: '了解游戏活动的策略设计',
            name: '周婧',
            wechatAccount: 'huiyu9144',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            profession: '网易游戏运营',
            experienceTag: '游戏行业沉浮3年',
            classificationId: 2,
            address: '网易大楼',
            distance: '50m',
            price: 50,
            faced: 17,
            productDes: '我是一个做了3年游戏策划的老兵，从wap游戏开始，一直到今天的手游。职位也从一个小兵，到一个策划人，其中有许多游戏活动的经历。',
            stagerDes: [
                '在对「游戏体验」追本溯源的过程中，发现一切都顺应于人性的设计，于是一头扎进认知科学、社会心理学、脑神经科学、行为科学、等领域，进行跨领域学习。',
                '在对「人的游戏体验」越来越了解的同时，我发现我也渐渐拥有了设计自己人生体验的能力，并且通过种种原理和应用，让自己的生活幸福度和生命品质都有了很大的提升。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0e79xkz3vTKBCPr5lfxvbJsaF0aWgRloLUam9wthrvibXUUNHHNibrQuOTdbrwVnqJlrbGITM9q1ajA/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0e79xkz3vTKBCPr5lfxvbJsymTexFfg6Y2d2EQkysR0WAV6OU5wNibTmb4fQ8eRF4RD2Tq75xyaVpQ/0?wx_fmt=png'
        },
        {
            id: 105,
            title: 'HR教你如何面试、谈offer',
            name: '任昊',
            wechatAccount: 'huiyu9144',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            profession: '联想HRBP',
            experienceTag: '面试过超1000人',
            classificationId: 5,
            address: '联想(西北旺店)',
            distance: '100m',
            price: 200,
            faced: 21,
            productDes: '我在该领域有多年的经历，平均每年和300人以上的候选人进行沟通，了解他们在面试过程中的困惑；因为在企业方也工作过，所以能从企业HR角度客观的看待面试。',
            stagerDes: [
                '13年本科毕业，目前在联想担任HRBP职务，有4年互联网人力资源从业经验，技术背景出身，多年的互联网猎头招聘经验。',
                '与其他HR不一样，技术背景出身，转身进入猎头行业，专注技术(产品)领域，喜欢尝试各种社交渠道，喜欢与他人畅聊互联网，更喜欢在知乎等社交平台分享，解答他人问题。',
                '如果您对职业发展有困惑，如果您对互联网行业跳槽，面试有困惑，如果您想了解互联网行业招聘情况，如果您了解互联网行业猎头领域，欢迎交流，希望我的经验能够帮到你。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5ZXZdhmu6iaK9ELm7aZHDgZGeE8YaXD8PQ1EXS0OicHTR5UKhaww00BgA/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5UwYNdENI4YOb4vNkuk5tZ6KaPZk8NEoA6VSekDrYz6HFul6Al9SPVg/0?wx_fmt=png'
        },
        {
            id: 107,
            title: '市场研究方法及实际运用',
            name: '张文硕',
            wechatAccount: 'huiyu9144',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            profession: '新浪市场专家',
            experienceTag: '做市场研究多年',
            classificationId: 6,
            address: '新浪总部大厦',
            distance: '100m',
            price: 120,
            faced: 13,
            productDes: '市场研究是市场职能中重要的环节，在公司运作的各个方面，都能提供重要的信息输入。',
            stagerDes: [
                '我是最早开始参与微博项目的成员之一，经历微博运营的整个发展过程，现在负责用户相关的运营工作。在互联网产品运营方面积累了丰富的经验。有这方面的问题可以随时沟通。',
                '大家有互联网运营相关的话题，包括产品运营、用户运营、内容运营都可以交流。',
                '另外烟草行业也没忘，有对卷烟制造自动化控制流程感兴趣的朋友，也欢迎交流。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5VBcupiacB3fHiaMsxra3Aibaic0iaOVSoF1VbKJLsCjFxvVY9H0PCxEEpxA/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5wVZoibicw6TcKvFGPgPjvdHgb20GBBMbHWYZUibdeia2wFRAzYiadZKCavw/0?wx_fmt=png'
        },
        {
            id: 108,
            title: '如何用策略手段解决产品问题',
            name: '朱滢',
            wechatAccount: 'huiyu9144',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            profession: '滴滴策略产品经理',
            experienceTag: '做策略多年',
            classificationId: 6,
            address: '滴滴公司大厦',
            distance: '200m',
            price: 80,
            faced: 13,
            productDes: '每个产品在它的生命周期中都会遇到这么一类问题，小到每天几点给用户推动消息更合适、大到导航路线如何规划。',
            stagerDes: [
                '有着多年互联网从业经验，有从0到1用户获取的经历，也有在很少费用情况下做到百万用户的经验，在用户拉新、留存等方面积累了一些经验教训，也有收获。',
                '此前曾在面包旅行任职，成功参与b轮到c轮的融资。',
                '性格随和易沟通，喜好结交朋友，爱旅游，也热爱互联网这片热土，看过好几个互联网沉浮，也会多一些琢磨，希望能认识更多的有志之士。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5b8oUnt0iaOIU7g39fh50bAg6gX8Tic1nNdvbert4pib1Y8NOooD0gVzFA/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5uzu4pjxKZCwyQoSB3TM35XKe0KKJpVavZ7iclibZNl5rZMHqPw1BTOcQ/0?wx_fmt=png'
        },
        {
            id: 109,
            title: '聊一聊北京买房那些事儿',
            name: '杨海平',
            wechatAccount: 'huiyu9144',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            profession: '甲骨文教项目经理',
            experienceTag: '北京买过2套房',
            classificationId: 7,
            address: '甲骨文大厦',
            distance: '500m',
            price: 300,
            faced: 14,
            productDes: '北京地产市场其实是政策市，买房时机如何把握？对个人而言，存量房供应实在选择有限，版块如何定位？如何看长短周期？',
            stagerDes: [
                '我，大学期间在学生会工作。大学毕业后校招加入IBM，被称为“纯蓝”人。作为为数不多的女性工程师，深知在男人堆里打拼的滋味。',
                '从技术工程师到业务拓展经理，完成了人数的第一次转型。从IBM到微软，不同的职位，不同的企业，在全新的领域里完成了从零到一的过程。',
                '离开微软后，自主创业，民营企业，加入早期创业公司，不同企业的经历，让我深知各个不同企业的特点和对人才需求的差异。并在这一过程中，逐步找到职业发展瓶颈的突破口。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5dQOL7dVchx3z94fq1N9QOBS80ly59ia6IZOiaFGxGrDv0GibGv16Zxe7w/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5wiaD0bjR8icuOkekic0hsa0tB1crsB3LLTsL0BZrn7kXstbDVNZastnpA/0?wx_fmt=png'
        },
        {
            id: 110,
            title: '开一家美发店并不简单',
            name: '袁江飞',
            wechatAccount: 'huiyu9144',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0c0HHGNmvsicq066iasvOZiat1L2BpAUDuMw9RtL4zPE3JcmZOOJcvLba6pdopuUdleN8uzV9UicVsc0g/0?wx_fmt=png',
            profession: '吉泽美发店店长',
            experienceTag: '多家美发店待过',
            classificationId: 2,
            address: '西二旗地铁站',
            distance: '2km',
            price: 400,
            faced: 17,
            productDes: '作为一个美发店长，遇到过不少问题，店员管理、门店运营、顾客转化、美团点评维护等等',
            stagerDes: [
                '不像很多发型师是误打误撞入了行，他自己主动选择了成为一名发型师。还是读书那会儿，他是同学口中“漂亮的小男孩”，自然非常在意自己的形象，没事就喜欢摆弄头发，给自己整一个酷酷的造型。还在“洗剪吹”肆虐的时代，他就已经能做出不落俗套的发型了。于是，也就这么顺理成章地顺着自己的喜好和才华，成为了一名发型师，作品也从自己变成了别人。',
                '前期还是比较坎坷，毕竟给自己做发型可以凭着灵气折腾，乱来也没事，真正变成职业选手了，打基础、练手艺都是必经之路。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA54vuHX0rGOqDoZDHEfFuahNQYn34qC432NHUjokEQf9MvVDso5CDmmQ/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cYzIhSjVws86qv6rbs9bA5DRn0wNPFibHSaGibF3W3cR7LicCPgoJiayuJkwOrZkey8iaHEtibVmo6L8ibg/0?wx_fmt=png'
        },
        // 吴亮物料部分
        {
            id: 200,
            title: '当面对无法合作的工作伙伴时，我们该如何选择',
            name: '王薇薇',
            wechatAccount: 'Yamatepis',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajRdlsgxYvm3b1zs1gY4roEsv9FVr9p02HVrrfDou3TDIiaHRuQuOkn9g/0?wx_fmt=png',
            profession: '百度产品运营',
            experienceTag: '搞定三个难搞的同事',
            classificationId: 1,
            address: '百度科技园',
            distance: '50m',
            price: 50,
            faced: 12,
            productDes: '在职场中难免会遇到很难搞得合作伙伴，从最开始的对人不对事，慢慢变成了对事不对人，甚至最终患上上班倦怠症，曾经我被这种感觉深深折磨。如果你有类似的经历，我很愿意和你分享我是如何处理，并且做出选择判断的。',
            stagerDes: [
                '15年毕业于中国传媒大学，先后在去哪儿、知乎，百度知道担任产品运营工作，很高兴与你交流工作中遇到的各种问题。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBvU094cgIwZr17CMOSlJBoucgVyiaZBwG0dOChChla3d2UqulEGohHZQ/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBhV7BXCX4RFAtNZgZxnYFlIHZYGtcCZVBENHLeMpYrKqgRFGKWpXJaQ/0?wx_fmt=png'
        },
        {
            id: 201,
            title: '如何开展一次有效的用户调研',
            name: '潘晴',
            wechatAccount: 'Yamatepis',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajRdlsgxYvm3b1zs1gY4roEsv9FVr9p02HVrrfDou3TDIiaHRuQuOkn9g/0?wx_fmt=png',
            profession: '百度UER专家',
            experienceTag: '社会学博士',
            classificationId: 1,
            address: '百度科技园',
            distance: '50m',
            price: 150,
            faced: 12,
            productDes: '5年的UER经验，用户调研有哪些方式，调研的过程中又有哪些事情需要注意，很高兴与你分享探讨我的经验',
            stagerDes: [
                '5年UER工作经验，百度UER专家，负责过地图、糯米、网盘等明星产品相关的UER调研工作。用户调研的方法涉及到的应用场景不局限于工作，在日常生活中如何更好的沟通，如何聆听他人的感受，这些场景的底层逻辑和用户调研是一样的。相信和我交流的一个小时时间能给你不一样的收获。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBtIonINRoicxHSMOh9dstias9IdibhxlEQCrf3g3jaicAPs6kC35cuJDtQQ/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBXjpOuibEXaZiaeaPlpyqUU1gL8ibYIFFwDG5uAoJribxhA8sYSaTFEt5Iw/0?wx_fmt=png'
        },
        {
            id: 202,
            title: '如何利用下班时间快速升值',
            name: '张扬',
            wechatAccount: 'Yamatepis',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajRdlsgxYvm3b1zs1gY4roEsv9FVr9p02HVrrfDou3TDIiaHRuQuOkn9g/0?wx_fmt=png',
            profession: '网易项目经理',
            experienceTag: '自考过CPA',
            classificationId: 1,
            address: '网易大楼',
            distance: '50m',
            price: 50,
            faced: 20,
            productDes: '过去的两年年里，我利用下班时间，零基础学了会计，考过了CPA，自学了经济学、金融学、心理学等各个领域的知识。同事们都惊讶于我的效率，我也向他们分享了我的经验，他们都表示受益匪浅，希望我的这份经历对你有用。',
            stagerDes: [
                '现任网易新闻项目经理，学习爱好者，自考过CPA，会点代码，懂点心理，可以聊经济学，欢迎交换思想.'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxB3pZUYmiaGeIO7EibmR2tdScRicva1ia5iax3Kq14rF3xFeqXnznkx85SDDg/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBUm5WcTOuRS2vKI7Y4tbPjJkpicecKictkt7j6s0Yp96Nb0OuV3YzlzLA/0?wx_fmt=png'
        },
        {
            id: 204,
            title: '如何快速融入新的工作环境，建立朋友圈',
            name: '蔡培',
            wechatAccount: 'Yamatepis',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajRdlsgxYvm3b1zs1gY4roEsv9FVr9p02HVrrfDou3TDIiaHRuQuOkn9g/0?wx_fmt=png',
            profession: '百度产品经理',
            experienceTag: '五年四家公司',
            classificationId: 1,
            address: '百度科技园',
            distance: '50m',
            price: 50,
            faced: 11,
            productDes: '毕业五年，跳了三回槽。当第一次跳槽时，我本身是一个慢热的人，还略有一些社交恐惧症，我发现如何快速融入一个新的团队是一门学问，也思考了一些方法并付出了相关实践。我愿意与分享我三次跳槽后如何快速融入团队的经历。',
            stagerDes: [
                '13年毕业于北京邮电大学。呆过创业公司，后就职于唱吧、头条，现任百度产品经理。随时约，随时聊，保证不冷场，话题不限，主场话题：产品、运营、音乐、篮球、跳槽。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBMibx6tVFL81lsE5Whzzvj1pUBUcx6YNNiaMjknnm4z1LqncibicsxFGrvQ/0?wx_fmt=jpeg',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBxbpNf2ibBWkSaypuRqIrbic7QvuuNTuia75nPMKwDlMicma1e1yibibo52HQ/0?wx_fmt=png'
        },
        {
            id: 205,
            title: '幼儿园操办指南，帮助每位焦虑的家长',
            name: '王倩',
            wechatAccount: 'Yamatepis',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajRdlsgxYvm3b1zs1gY4roEsv9FVr9p02HVrrfDou3TDIiaHRuQuOkn9g/0?wx_fmt=png',
            profession: '宝宝知道产品运营',
            experienceTag: '2个孩子的妈妈',
            classificationId: 7,
            address: '奎科大楼',
            distance: '100m',
            price: 50,
            faced: 21,
            productDes: '怕孩子输在起跑线上，想给他最好的教育，帮小孩找幼儿园真是件很辛苦的事。我很愿意和你分享我的经历，希望能对你有帮助',
            stagerDes: [
                '现任宝宝知道产品运营，同时也是2个孩子的妈妈。很期待与各行各业的你共享育儿经验，减少弯路，与孩子一起成长。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBv8PIIIyaVtN6A5Z1ziaujnibndMKuQJVvZsuCk6G8osSa8PtabvotiaDA/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBHPn8LRic6h4k4ryUsBe39DB5pKyF3qhr8jvnbnmHw2eh6Q406yvwq1A/0?wx_fmt=png'
        },
        {
            id: 206,
            title: '聊一聊我是如何经营一家711便利店的',
            name: '王志凯',
            wechatAccount: 'Yamatepis',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajRdlsgxYvm3b1zs1gY4roEsv9FVr9p02HVrrfDou3TDIiaHRuQuOkn9g/0?wx_fmt=png',
            profession: '西二旗7-11店长',
            experienceTag: '北京3家7-11店店长',
            classificationId: 2,
            address: '西二旗7-11门店',
            distance: '1.1km',
            price: 100,
            faced: 23,
            productDes: '7年711店长，小小的店面，其中包含了我7年的运营心血，如果你感兴趣的话，我很愿意和分享我的开店运作经历',
            stagerDes: [
                '毕业于北京邮电大学，最开始做7-11，父母和很多身边的朋友都不太能理解。但在我的视角里，每一份货物的出售，看到自己布置出来的精美货架，都让我感受到了切切实实的实感，我很愿意与你分享这份实感，也期待你与我分享你的工作中那些有意思的感受。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBWRA0SpXpcYDuhbV1JRfM7gHpmVEIzxAY5l35HSROnbibmu3IACmX8Cg/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBytp5zJ3P71JyVBpfHGEqaWQLby5gTTxVRzjz4pjG6OE4998YKPicDTg/0?wx_fmt=png'
        },
        // 润民物料部分 Yamatepis
        {
            id: 301,
            title: '前端工程师的发展路径',
            name: '吴衡',
            wechatAccount: 'runmin_zhang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajGVSBCeqd9JyczlKbXJ0M9xb7gB7d4X46icEpiatGDALveUS3KpOY1b1g/0?wx_fmt=jpeg',
            profession: '微博前端工程师',
            experienceTag: '独立开发者',
            classificationId: 1,
            address: '新浪总部大厦',
            distance: '500m',
            price: 100,
            faced: 12,
            productDes: '5年多的从业经验，自己有很明确的前端工程师的发展路径规划，也和从业10年多的大牛探讨过未来该职业的发展。可以和你探讨前端工程师怎么走比较快，学哪些知识比较利于未来的发展。',
            stagerDes: [
                '从业5年的前端开发从业者，目前在微博从事技术架构工作，关注多个技术领域，并且有多个线上 app 开发和运营的经验，业余目前仍然是一个独立开发者，喜欢自己思考产品，然后用技术手段把他们实现出来，5年来一直在技术领域耕耘，也涉猎其他诸多领域，欢迎大家来探讨。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBIC2X3QibWjiaKVuBV9aCTkKWicZ7MD8mbXuewDFuUxQduqPdrP3YRVqCQ/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBIC2X3QibWjiaKVuBV9aCTkKWicZ7MD8mbXuewDFuUxQduqPdrP3YRVqCQ/0?wx_fmt=png'
        },
        {
            id: 302,
            title: '网易产品经理方法论',
            name: '张璐',
            wechatAccount: 'runmin_zhang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajGVSBCeqd9JyczlKbXJ0M9xb7gB7d4X46icEpiatGDALveUS3KpOY1b1g/0?wx_fmt=jpeg',
            profession: '网易产品经理',
            experienceTag: '资深产品人',
            classificationId: 1,
            address: '网易大楼',
            distance: '500m',
            price: 100,
            faced: 5,
            productDes: '我们可以讨论将一个概念真正落地的方法。一个大型产品的产品设计实际步骤，具体需求点分析，需求点拆解细化、产品功能架构搭建。产品规划及详细设计要点。以及如何快速培养’产品感。',
            stagerDes: [
                '师范院校毕业、一年教师经验，3年互联网经验。2017.2-至今网易产品经理，通过创新方法挖掘用户需求，完成多个垂直方向实体化推进，项目数据突出。2015.8-2017.2 搜狐视频产品负责全部页面、后端服务、播放器产品设计。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0ceFoCYgkHphYeZ1gmIIWBJnYuibuzC87K0tK4rrqQRaZ9jc1xmGpdkhdgvJxxD7IcN1ccV6icTfpyQ/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxB2olS1SpuS9dYA6L9JSdPzxSuOZTzJR8B1lPxwMShbfPEB55pd1rRhA/0?wx_fmt=png'
        },
        {
            id: 303,
            title: '定制一场无与伦比的日本之旅',
            name: '尹禾苗',
            wechatAccount: 'runmin_zhang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajGVSBCeqd9JyczlKbXJ0M9xb7gB7d4X46icEpiatGDALveUS3KpOY1b1g/0?wx_fmt=jpeg',
            profession: '滴滴视觉设计师',
            experienceTag: '日本旅游达人',
            classificationId: 3,
            address: '滴滴公司大厦',
            distance: '2km',
            price: 100,
            faced: 6,
            productDes: '按照您的需求和预算，规划最适合您的行程，推荐性价比较高的机票和酒店交通，介绍省钱小秘籍，告诉您很有特色的店家，想买的潮牌，想去的动漫主题店，个性需求帮您实现。',
            stagerDes: [
                '本人曾去过日本旅行有5次，因为自学过日语，曾经在富士山脚下的小卖部和日本老太太讨论中日关系；每次赴日都会在商场和店员讨论当季的流行服饰，而从未被发现是外国人。除了旅行，本人对日本动漫、日本音乐、潮流时尚等方面也小有研究，感兴趣的亲也可以找我聊聊'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBa7nrb2byFjGdwfKlzws2cukZG3lyC3FIsFbIvqk1iaYiayqyamMMPfgQ/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBrISozXVDWbBJ78BeWLQ3h4xpKFCfu3ia8op7zVKW2WAiabMxc8icCy1TA/0?wx_fmt=png'
        },
        {
            id: 304,
            title: '规划一次欧洲二战的旅游路线',
            name: '陈哲',
            wechatAccount: 'runmin_zhang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajGVSBCeqd9JyczlKbXJ0M9xb7gB7d4X46icEpiatGDALveUS3KpOY1b1g/0?wx_fmt=jpeg',
            profession: '百度旅游产品经理',
            experienceTag: '欧洲旅游达人',
            classificationId: 3,
            address: '鹏寰国际大厦',
            distance: '2km',
            price: 150,
            faced: 3,
            productDes: '法国的浪漫、德国的严谨，瑞士的雪山，历史悠久古老的欧洲是众多旅游爱好者心驰神往之地。可以为你规范欧洲旅游目的地和景点的选择，欧洲二战旅游线路设计，古堡游、博物馆游的设计。',
            stagerDes: [
                '在加拿大马尼托巴大学历史专业毕业，欧洲旅游经历丰富、人文知识丰富。对于二战历史、文化和欧洲古迹、景点有较多的了解。尤为喜欢柏林及波茨坦，无忧宫是必去之地，它是一栋极尽奢华纤巧之能事的洛可可式宫殿。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBlCvx3ibM0tTTgtcQd43M8fibMsr5v3kYSLpiaFKdI4Mebf0FrYOIbgo1Q/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBlCvx3ibM0tTTgtcQd43M8fibMsr5v3kYSLpiaFKdI4Mebf0FrYOIbgo1Q/0?wx_fmt=png'
        },
        {
            id: 305,
            title: '从零开始炒股',
            name: '张庆',
            wechatAccount: 'runmin_zhang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajGVSBCeqd9JyczlKbXJ0M9xb7gB7d4X46icEpiatGDALveUS3KpOY1b1g/0?wx_fmt=jpeg',
            profession: '百度产品经理',
            experienceTag: '5年炒股经历',
            classificationId: 2,
            address: '网易大楼',
            distance: '500m',
            price: 150,
            faced: 18,
            productDes: '投资是一门技术学问，有一定门槛，如果你买一双鞋都会花 三个小时打开八个网页比较，那你就更应该决定在股市中投入积蓄前学习一些炒股知识，我们可以按照答疑模式进行讨论，也可以给你介绍下为什么炒股票，涨跌停、仓位、大盘、空等等词汇扫盲，如何观察一只股票的交易量，运用三个假设和四个要素分析股票等等。',
            stagerDes: [
                '毕业于清华大学，目前就职于百度金融事业部。他从事过风险投资及股票交易员。他希望自己的经验能够帮助希望了解股市投资的所有朋友少走弯路，在股市的大众狂热中保持冷静，在群体万念俱灰时发现机会。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxByMCDe6fD5WIERmmibY4FR6UThBpLtONDkNDC5v7uakIxL8xb98iaBBwA/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxByMCDe6fD5WIERmmibY4FR6UThBpLtONDkNDC5v7uakIxL8xb98iaBBwA/0?wx_fmt=png'
        },
        {
            id: 306,
            title: '如何通过写作提升逻辑表达能力',
            name: '郑诗冰',
            wechatAccount: 'runmin_zhang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajGVSBCeqd9JyczlKbXJ0M9xb7gB7d4X46icEpiatGDALveUS3KpOY1b1g/0?wx_fmt=jpeg',
            profession: '网易公关',
            experienceTag: '百度百家专栏作者',
            classificationId: 1,
            address: '网易大楼',
            distance: '500m',
            price: 150,
            faced: 10,
            productDes: '清晰的写作体现其清晰的思路，优秀的写作者懂得沟通，可以聊聊阅读书籍的一些方法，结构化的书写读后感及书评，如何训练书写的逻辑能力。建立碎片化整理的习惯。以及降低预期、培养规律的习惯并建立积极的正反馈机制。',
            stagerDes: [
                '毕业于北京大学，目前就职于网易，从事公关工作，是百度百家专栏作者，专栏作者给自己写作和公关写作带来了更加充实的积淀，读书和电影是我最大乐趣，还算半个科技极客，业余兴趣能够带来更多的灵感和启发。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBW76tcpo6pZWEBPTT3icyaYmpGhvahQo5NmGEbk3pKvRibxW0CchXdXfA/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBNjy1zicUq2iaAgN4F8gSluGXPOJ6wIgzzKiafialZfyxthL7pcR7XSspSQ/0?wx_fmt=png'
        },
        {
            id: 307,
            title: '产品工作汇报，如何快提高演讲能力',
            name: '陆飞',
            wechatAccount: 'runmin_zhang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajGVSBCeqd9JyczlKbXJ0M9xb7gB7d4X46icEpiatGDALveUS3KpOY1b1g/0?wx_fmt=jpeg',
            profession: '百度产品经理',
            experienceTag: '头马俱乐部会员',
            classificationId: 1,
            address: '百度科技园',
            distance: '500m',
            price: 100,
            faced: 12,
            productDes: '演讲在工作汇报、竞聘、 述职、产品、路演等等都极为需要。和你探讨如何克服演讲时的紧张，如何提高演讲技巧，及提高演讲感染力。可以分享给你一套行之有效的演讲套路，应对一些场合的即兴演讲，了解一套科学的台风。',
            stagerDes: [
                '毕业后就职于百度，网易头马俱乐部会员，演讲达人，喜欢运用理论阐述+案列学习+实战演练+针对性点评的方式提高自己及他人的演讲水平，效果较为显著。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBl0iacgQXhsb6SWMbsG16Ys0KDIeBAtxJZamxgNbIicMzcydCkE6lcCFg/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBzlBLY1TQNbx2ibUicUEciac1aUjKLZh364N9ezGJroiabY65wgasQkTgpQ/0?wx_fmt=png'
        },
        {
            id: 308,
            title: '如何实现技术、运营、产品之间转岗',
            name: '张娟',
            wechatAccount: 'runmin_zhang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajGVSBCeqd9JyczlKbXJ0M9xb7gB7d4X46icEpiatGDALveUS3KpOY1b1g/0?wx_fmt=jpeg',
            profession: '网易高级产品经理',
            experienceTag: '职业规划达人',
            classificationId: 1,
            address: '网易大楼',
            distance: '500m',
            price: 80,
            faced: 8,
            productDes: '产品运营、技术各工种的职能介绍，运营转产品，技术转产品等各岗位如何做到的转岗切换。针对个人合理规划长期短期的职业发展和规划。',
            stagerDes: [
                '2013-2015在人人网从事技术，随后从事策划工作，2016至今在网易从事产品工作，从事过技术，市场、 运营产品等工作。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/oZLZe4SBN0ceFoCYgkHphYeZ1gmIIWBJsEdGUOtgFIaJhwq43Rw5gwqD1CML9sa5fbEAkBPqcuYOxZmDichEYaw/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBnvpxCibmW5GAvHXCKm3ZicR3SSN8Q3HkibPvibbtUpJVxOj9cpBLK9Btqg/0?wx_fmt=png'
        },
        {
            id: 309,
            title: '如何克服两性沟通障碍',
            name: '任小青',
            wechatAccount: 'runmin_zhang',
            wechatQRUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/oZLZe4SBN0cTvfxFeXH1PU7XNicaoiaWajGVSBCeqd9JyczlKbXJ0M9xb7gB7d4X46icEpiatGDALveUS3KpOY1b1g/0?wx_fmt=jpeg',
            profession: '百度用户研究',
            experienceTag: '心理咨询师',
            classificationId: 2,
            address: '百度科技园',
            distance: '500m',
            price: 120,
            faced: 20,
            productDes: '可以与聊聊如何打破男女的沟通障碍？如何在男女关系中掌握主动？如何解决男女朋友之间矛盾的难点？',
            stagerDes: [
                '2015-至今在百度从事用户研究工作。同时，研究的是人和互联网、人和机器之间的关系。 如果你在寻找精准用户、洞悉用户需求上有需求，我的专业知识和或许可以帮到你。',
                '在我看来，越是懂得在两性关系中如何良性互动的人，越能了解用户，也越能把握和预见互联网创业的行业先机，这两个话题相辅相成，希望与你一起探讨人与人之间的关系。'
            ],
            headerImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBuoBR1QMxL0ckeomgmkcCWGicY0Pr3dZuaa1qnoic7iaN91x2JGGue7sWA/0?wx_fmt=png',
            contentImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/wDK6CibcOhhMfM2uRLLRDHh52vA6hGkxBTNZI8Qk0c7ibtLrS8icNr98kGwxzouprUqnNocdoH9vghhXtfsbdD4Aw/0?wx_fmt=png'
        }
    ]
};