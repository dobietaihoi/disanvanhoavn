export type HeritageId = 'don-ca-tai-tu' | 'hat-xam' | 'hat-tuong';

export interface ContentMatrixRow {
  stt: string;
  aspect: string;
  anchorId: string;
  guidingQuestion: string;
}

export interface HeroPillarSummary {
  id: HeritageId;
  title: string;
  region: string;
  summary: string;
  image: string;
  imageAlt: string;
  figureCaption: string;
}

export interface TrustRow {
  id: HeritageId;
  heritageName: string;
  legalMilestones: string[];
  networkAndProjects: string[];
}

export interface HeritageBullet {
  label: string;
  text: string;
}

export interface HeritageSubSection {
  index: string;
  title: string;
  bullets: HeritageBullet[];
}

export interface HeritagePillarBlock {
  id: HeritageId;
  blockCode: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  figureLabel: string;
  subsections: HeritageSubSection[];
}

export interface ComparisonMatrixRow {
  criterion: string;
  donCaTaiTu: string;
  hatXam: string;
  hatTuong: string;
}

export interface XamTimelineStage {
  stageNumber: string;
  period: string;
  title: string;
  description: string;
}

export interface ShowcaseItem {
  id: HeritageId;
  index: string;
  title: string;
  bullets: HeritageBullet[];
}

export interface ChallengeRow {
  id: HeritageId;
  heritageName: string;
  challenges: string[];
}

export interface PricingTier {
  title: string;
  detail: string;
  note: string;
}

export interface ExpertQuote {
  index: string;
  author: string;
  context: string;
  quote: string;
}

export interface CaseStudyItem {
  code: string;
  title: string;
  heritageId: HeritageId;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SurveyQuestion {
  id: string;
  groupId: HeritageId;
  groupName: string;
  number: number;
  question: string;
  options: {
    id: string;
    label: string;
    initialCount: number;
  }[];
}

export interface ReferenceItem {
  id: string;
  heritageId: HeritageId;
  category: 'academic' | 'web';
  code: string;
  citation: string;
  url?: string;
}

export interface VenueScheduleItem {
  name: string;
  heritageType: string;
  location: string;
  format: string;
  scheduleNote: string;
}

export const PROJECT_META = {
  fullTitle:
    'DI SẢN VĂN HÓA PHI VẬT THỂ VIỆT NAM: ĐỜN CA TÀI TỬ NAM BỘ – HÁT XẨM – HÁT TUỒNG',
  shortTitle: 'Di sản Phi vật thể Việt Nam',
  heroHeadline:
    'Tinh hoa Nghệ thuật Diễn xướng & Âm nhạc Truyền thống Việt Nam: Đờn ca tài tử Nam Bộ – Hát Xẩm – Hát Tuồng',
  heroSubheadline:
    'Hành trình khám phá nguồn gốc lịch sử, đặc trưng nghệ thuật, triết lý nhân sinh và sức sống đương đại của ba loại hình di sản văn hóa phi vật thể tiêu biểu trải dài từ Bắc Bộ, Trung Bộ đến Nam Bộ.',
  heroImage: '/src/assets/images/hero_heritage_stage_1795271093955.jpg',
  heroImageAlt:
    'Không gian diễn xướng truyền thống tại sân đình cổ với đàn kìm, đàn bầu và trống chiến dưới ánh đèn lồng',
  heroFigureCaption:
    'Tư liệu ảnh 01 — Không gian sân đình cổ truyền nơi hội tụ nhạc cụ và nghi thức diễn xướng dân gian Việt Nam.',
};

export const NAV_GROUP_HERITAGE = [
  { id: 'khoi-don-ca-tai-tu', label: 'Đờn ca tài tử Nam Bộ' },
  { id: 'khoi-hat-xam', label: 'Hát Xẩm' },
  { id: 'khoi-hat-tuong', label: 'Hát Tuồng (Hát Bội)' },
];

export const NAV_GROUP_AXES = [
  { id: 'di-san', label: '1. Nguồn gốc & Lịch sử' },
  { id: 'co-che', label: '2. Đặc trưng & Thực hành' },
  { id: 'di-san', label: '3. Vai trò cộng đồng' },
  { id: 'di-san', label: '4. Giá trị văn hóa & Tri thức dân gian' },
  { id: 'thich-nghi', label: '5. Đời sống hiện đại' },
  { id: 'thach-thuc', label: '6. Thực trạng & Nguy cơ mai một' },
  { id: 'khao-sat', label: '7. Di sản trong mắt công chúng' },
  { id: 'tai-lieu-tham-khao', label: 'Tài liệu tham khảo' },
];

export const CONTENT_MATRIX: ContentMatrixRow[] = [
  {
    stt: '01',
    aspect: 'Nguồn gốc & Lịch sử hình thành',
    anchorId: 'di-san',
    guidingQuestion:
      'Loại hình di sản ra đời trong bối cảnh lịch sử, địa lý, xã hội nào? Những mốc thời gian, sự kiện hoặc nhân vật lịch sử/nghệ nhân nào đóng vai trò quan trọng trong sự hình thành và phát triển?',
  },
  {
    stt: '02',
    aspect: 'Đặc trưng nghệ thuật & Hình thức thực hành',
    anchorId: 'co-che',
    guidingQuestion:
      'Đặc trưng nổi bật về mặt âm nhạc, ca từ, nhạc cụ, kỹ thuật biểu diễn, hóa trang, trang phục và không gian diễn xướng là gì? Di sản được thực hành và trao truyền như thế nào?',
  },
  {
    stt: '03',
    aspect: 'Vai trò đối với cộng đồng',
    anchorId: 'di-san',
    guidingQuestion:
      'Di sản có vai trò, ý nghĩa gì trong đời sống tinh thần, tâm linh, sinh hoạt văn hóa của cộng đồng chủ thể? Cộng đồng tham gia bảo tồn và phát huy giá trị di sản ra sao?',
  },
  {
    stt: '04',
    aspect: 'Giá trị văn hóa & Tri thức dân gian',
    anchorId: 'di-san',
    guidingQuestion:
      'Di sản kết tinh những giá trị văn hóa, đạo đức, triết lý nhân sinh hay tri thức dân gian nào? Giá trị này đóng góp gì vào kho tàng di sản văn hóa dân tộc và thế giới?',
  },
  {
    stt: '05',
    aspect: 'Đời sống hiện đại & Sự thích nghi',
    anchorId: 'thich-nghi',
    guidingQuestion:
      'Di sản đang tồn tại và phát triển như thế nào trong xã hội hiện đại? Có những sáng kiến, mô hình hay hình thức ứng dụng mới nào (du lịch, giáo dục, công nghệ, truyền thông) giúp di sản tiếp cận công chúng?',
  },
  {
    stt: '06',
    aspect: 'Thực trạng, thách thức & Nguy cơ mai một',
    anchorId: 'thach-thuc',
    guidingQuestion:
      'Di sản đang đối mặt với những khó khăn, thách thức hay nguy cơ mai một nào (thiếu lực lượng kế cận, thu hẹp không gian diễn xướng, thương mại hóa, biến đổi môi trường sống...)?',
  },
  {
    stt: '07',
    aspect: 'Di sản trong mắt công chúng & Góc nhìn đương đại',
    anchorId: 'khao-sat',
    guidingQuestion:
      'Công chúng (đặc biệt là giới trẻ), các nhà nghiên cứu, du khách trong và ngoài nước nhìn nhận, đánh giá thế nào về di sản? Cần làm gì để nâng cao nhận thức và tình yêu di sản cho thế hệ trẻ?',
  },
];

export const HERO_PILLARS: HeroPillarSummary[] = [
  {
    id: 'don-ca-tai-tu',
    title: 'Đờn ca tài tử Nam Bộ',
    region: 'Nam Bộ · UNESCO 2013',
    summary:
      'Nghệ thuật ca đàn vùng Nam Bộ kết hợp gốc rễ bác học (nhã nhạc cung đình Huế) và dân gian, được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại năm 2013.',
    image: '/src/assets/images/don_ca_tai_tu_ensemble_1795271093930.jpg',
    imageAlt: 'Ban nhạc Đờn ca tài tử Nam Bộ biểu diễn bên sông với đàn kìm, đàn tranh, đàn cò và guitar phím lõm',
    figureCaption: 'Fig. 01 — Hòa tấu Tứ tuyệt Nam Bộ',
  },
  {
    id: 'hat-xam',
    title: 'Hát Xẩm',
    region: 'Châu thổ sông Hồng · Bắc Bộ',
    summary:
      'Nghệ thuật diễn xướng dân gian châu thổ sông Hồng gắn với thánh tích hoàng tử Trần Quốc Đĩnh và tiếng hát mưu sinh giàu tính nhân văn của người khiếm thị.',
    image: '/src/assets/images/hat_xam_ninh_binh_1795271093917.jpg',
    imageAlt: 'Nghệ nhân Hát Xẩm biểu diễn trên chiếu cói với đàn bầu và sênh cặp kè tại sân đình cổ Bắc Bộ',
    figureCaption: 'Fig. 02 — Chiếu Xẩm cổ truyền Bắc Bộ',
  },
  {
    id: 'hat-tuong',
    title: 'Hát Tuồng (Hát Bội)',
    region: 'Bắc – Trung – Nam · Thế kỷ XIII',
    summary:
      'Nghệ thuật sân khấu cổ truyền ước lệ, bi tráng hình thành từ thế kỷ XIII, kết tinh đỉnh cao của văn học, âm nhạc, vũ đạo và nghệ thuật hội họa mặt nạ.',
    image: '/src/assets/images/hat_tuong_classical_stage_1795271094305.jpg',
    imageAlt: 'Nghệ sĩ Hát Tuồng trong trang phục giáp bào thêu rồng và mặt nạ đỏ trung nghĩa cầm roi ngựa trên sân khấu',
    figureCaption: 'Fig. 03 — Sân khấu Tuồng cổ truyền',
  },
];

export const TRUST_STRIP_ROWS: TrustRow[] = [
  {
    id: 'don-ca-tai-tu',
    heritageName: 'Đờn ca tài tử Nam Bộ',
    legalMilestones: [
      'Tháng 12/2012: Bộ VHTTDL chính thức đưa vào Danh mục Di sản văn hóa phi vật thể quốc gia [W4].',
      'Ngày 5/12/2013: UNESCO chính thức ghi danh tại Phiên họp lần thứ 8 ở Baku (Azerbaijan) [W9][6].',
    ],
    networkAndProjects: [
      '21 tỉnh, thành: Ngành VHTTDL từ Nam Trung Bộ đến Tây Nam Bộ xây dựng đề án bảo tồn [W8].',
      'Số liệu CLB (số liệu báo đăng lại, cần xác minh năm): TP.HCM có ~229 CLB, 84 đội nhóm, 1.226 thành viên [W11]; Long An hơn 950 CLB với >15.000 hội viên [W14]; Bạc Liêu có >150 CLB với >2.000 thành viên [W13].',
    ],
  },
  {
    id: 'hat-xam',
    heritageName: 'Hát Xẩm',
    legalMilestones: [
      'Năm 2008: Phục dựng sân khấu hóa Lễ giỗ Tổ nghề Xẩm tại Văn Miếu – Quốc Tử Giám.',
      '14/11/2011: UBND tỉnh Ninh Bình phê duyệt Đề án "Khôi phục, bảo tồn và phát triển nghệ thuật Hát Xẩm".',
    ],
    networkAndProjects: [
      'Định hướng quốc tế: Hoàn thiện hồ sơ đệ trình UNESCO công nhận Hát Xẩm là Di sản văn hóa phi vật thể đại diện của nhân loại.',
      'Mạng lưới: Ra đời các chiếu Xẩm Đồng Xuân, Hào Nam; CLB Hát Xẩm Yên Phong (Ninh Bình) thành lập năm 2010.',
    ],
  },
  {
    id: 'hat-tuong',
    heritageName: 'Hát Tuồng (Hát Bội)',
    legalMilestones: [
      'Công nhận Quốc gia: Bộ VHTTDL đưa Nghệ thuật Hát Bội (Tuồng) tại Bình Định, Quảng Nam, TP.HCM vào Danh mục Di sản văn hóa phi vật thể quốc gia [W5][W6].',
    ],
    networkAndProjects: [
      'Nhà hát chuyên nghiệp: Nhà hát Tuồng Việt Nam, Nhà hát Tuồng Nguyễn Hiển Dĩnh (Đà Nẵng), Nhà hát Tuồng Đào Tấn (Bình Định), Nhà hát Nghệ thuật Hát bội TP.HCM [W6][W8].',
    ],
  },
];

export const HERITAGE_BLOCKS: HeritagePillarBlock[] = [
  {
    id: 'don-ca-tai-tu',
    blockCode: 'KHỐI A',
    title: 'ĐỜN CA TÀI TỬ NAM BỘ',
    subtitle: 'Âm nhạc bác học kết hợp dân gian vùng đất phương Nam · Ghi danh UNESCO 2013',
    image: '/src/assets/images/don_ca_tai_tu_ensemble_1795271093930.jpg',
    imageAlt: 'Các nghệ nhân Đờn ca tài tử Nam Bộ biểu diễn nhạc cụ Tứ tuyệt tại nhà thủy tạ sông nước',
    figureLabel: 'Tư liệu A — Diễn xướng Đờn ca tài tử Nam Bộ trong không gian sinh hoạt cộng đồng sông nước.',
    subsections: [
      {
        index: '1.',
        title: 'Nguồn gốc & Lịch sử hình thành',
        bullets: [
          {
            label: 'Gốc rễ nghệ thuật:',
            text: 'Là loại hình nghệ thuật vùng Nam Bộ kết hợp gốc rễ vừa mang tính bác học vừa mang tính dân gian [W1]. Nghệ thuật này bắt nguồn từ nhạc lễ và nhã nhạc cung đình Huế truyền vào Nam, sau đó được biến đổi thành nhạc lễ Nam Bộ. Các nhạc sư, nghệ nhân đã chỉnh lý hơi điệu, kết hợp các điệu hò, lý Nam Bộ và một số bài ca Huế, sáng tác lời ca mới để hình thành nên dòng nhạc tài tử [1].',
          },
          {
            label: 'Mốc lịch sử:',
            text: 'Nghệ thuật này hình thành từ cuối thế kỷ XIX [W10]. Tạp chí Khoa học xã hội (2017) ghi nhận quá trình di dân từ Huế vào Nam theo các đoàn nghĩa quân đã mang theo âm hưởng nhạc lễ cung đình [4]. Đây cũng là nền tảng cốt lõi của nghệ thuật Cải lương, bởi phần lớn diễn viên và soạn giả giai đoạn đầu của cải lương đều xuất thân từ giới nhạc tài tử [5].',
          },
          {
            label: 'Ghi danh chính thức:',
            text: 'Tháng 12/2012 được Bộ VHTTDL đưa vào Danh mục Di sản văn hóa phi vật thể quốc gia [W4]. Ngày 5/12/2013, UNESCO chính thức ghi danh Đờn ca tài tử Nam Bộ là Di sản văn hóa phi vật thể đại diện của nhân loại [W9][6].',
          },
        ],
      },
      {
        index: '2.',
        title: 'Vai trò đối với cộng đồng',
        bullets: [
          {
            label: 'Đời sống tinh thần:',
            text: 'Tại lễ đón bằng UNESCO (11/2/2014), Thủ tướng Chính phủ nhấn mạnh Đờn ca tài tử giữ vai trò đặc biệt trong đời sống tinh thần của người dân Nam Bộ, đồng thời góp phần làm phong phú đời sống tinh thần của toàn dân tộc [W3].',
          },
          {
            label: 'Gắn kết sinh hoạt:',
            text: 'Biểu diễn phổ biến tại các lễ hội, ngày giỗ, dịp ăn mừng, gắn chặt với các phong tục tập quán, hình thức truyền khẩu và nghệ thuật thủ công nghiệp truyền thống [W2]. Đề án tỉnh Cà Mau khẳng định qua hơn một thế kỷ, loại hình này luôn giữ vai trò là món ăn tinh thần không thể thiếu [W4].',
          },
          {
            label: 'Tính bình dân:',
            text: 'Nghệ thuật do chính người bình dân, thanh niên nông thôn ca đàn sau những giờ lao động vất vả [W15].',
          },
        ],
      },
      {
        index: '3.',
        title: 'Giá trị văn hóa & Tri thức dân gian',
        bullets: [
          {
            label: 'Tính chất ngẫu hứng & Song trùng:',
            text: 'GS.TS Trần Văn Khê xác định Đờn ca tài tử vừa mang tính dân gian vừa mang tính bác học — đây là cơ sở lý luận nền tảng cho nhiều công trình nghiên cứu về sau [3]. UNESCO cũng đánh giá cao sự kết hợp hài hòa giữa hai yếu tố này [W1].',
          },
          {
            label: 'Triết lý nhân sinh:',
            text: 'Tạp chí Khoa học xã hội (2017) tiếp cận tài tử dưới góc độ phản ánh triết lý nhân sinh, thể hiện quan điểm sống phóng khoáng, tình nghĩa của con người phương Nam [4]. Thủ tướng Chính phủ gọi loại hình này là "gạch nối" quan trọng giữa nghệ thuật truyền thống và nghệ thuật tương lai [W3].',
          },
        ],
      },
    ],
  },
  {
    id: 'hat-xam',
    blockCode: 'KHỐI B',
    title: 'HÁT XẨM',
    subtitle: 'Diễn xướng dân gian châu thổ sông Hồng · Thánh tích Tổ nghề Trần Quốc Đĩnh',
    image: '/src/assets/images/hat_xam_ninh_binh_1795271093917.jpg',
    imageAlt: 'Nghệ nhân Hát Xẩm biểu diễn trên chiếu cói với đàn bầu và sênh cặp kè tại sân đền Bắc Bộ',
    figureLabel: 'Tư liệu B — Chiếu Xẩm dân gian nơi sân đền cổ Bắc Bộ, kết hợp đàn bầu, sênh cặp kè và thau đồng.',
    subsections: [
      {
        index: '1.',
        title: 'Nguồn gốc & Lịch sử hình thành',
        bullets: [
          {
            label: 'Thánh tích & Ông tổ nghề:',
            text: 'Gắn liền với truyền thuyết dân gian về hoàng tử Trần Quốc Đĩnh (thời nhà Trần). Ông bị anh trai là Trần Ngọc Toán hãm hại, chọc mù hai mắt và bỏ lại trong rừng sâu. Trong cảnh đường cùng, ông đã tự mày mò (hoặc được Bụt truyền dạy trong mơ) chế tạo ra cây đàn làm từ ống tre, dây rừng và que nứa để gảy lên những giai điệu than ngọc khóc than, mưu sinh qua ngày. Khi được cứu thoát và vua cha nhận lại, ông xin tha tội cho anh trai rồi xin phép đi khắp nơi truyền dạy tiếng đàn, điệu hát cho người nghèo và người khiếm thị kiếm sống. Ông được tôn vinh là ông tổ nghề Hát Xẩm (ngày giỗ Tổ là 22/2 và 22/8 âm lịch). Do chính sử không ghi chép, nguồn gốc Hát Xẩm dựa chủ yếu trên hệ thống thánh tích này.',
          },
          {
            label: 'Bản chất loại hình:',
            text: 'Nghệ thuật diễn xướng dân gian độc đáo của người khiếm thị ở vùng đồng bằng Bắc Bộ, kết hợp giữa âm nhạc, thơ ca và kỹ năng diễn xướng ngẫu hứng.',
          },
        ],
      },
      {
        index: '2.',
        title: 'Vai trò đối với cộng đồng',
        bullets: [
          {
            label: 'Ý nghĩa nhân văn & Kế sinh nhai:',
            text: 'Hát Xẩm là phương thức kế sinh nhai nhân văn, giúp những người tàn tật, khiếm thị trong xã hội cũ có thể tự lập, sống bằng lao động nghệ thuật chân chính mà không phải xin xỏ đơn thuần.',
          },
          {
            label: 'Món ăn tinh thần & Truyền thông dân gian:',
            text: 'Tại các làng quê Bắc Bộ (tiêu biểu là Ninh Bình), Xẩm là món ăn tinh thần dân dã tại các chợ phiên, góc phố, hội làng hay dịp ma chay, cưới hỏi, mừng thọ. Hát Xẩm đóng vai trò như một kênh "truyền thông đại chúng dân gian", loan tin thời sự, giáo dục đạo đức và truyền tải tư tưởng yêu nước trước khi các phương tiện thông tin đại chúng ra đời.',
          },
        ],
      },
      {
        index: '3.',
        title: 'Giá trị văn hóa & Tri thức dân gian',
        bullets: [
          {
            label: 'Giá trị âm nhạc & Kỹ thuật:',
            text: 'Đóng góp vào hệ thống âm nhạc cổ truyền Việt Nam thang 5 âm trên hai điệu thức chính là Huỳnh và Nam. Bộ nhạc cụ tối giản nhưng độc đáo gồm đàn bầu (hoặc đàn Xẩm), sênh cặp kè và sáo mạng. Kỹ thuật thanh nhạc đạt chuẩn "vang, rền, nền", "tròn vành rõ chữ", nốt vuốt và luyến láy đặc trưng.',
          },
          {
            label: 'Kho tàng thi ca dân gian:',
            text: 'Lưu truyền kho tàng ca dao, tục ngữ, truyện thơ dân gian dài tập, đồng thời lan tỏa các tác phẩm thơ ca bác học của Nguyễn Bính, Tản Đà, Nguyễn Khuyến, Phan Bội Châu.',
          },
          {
            label: 'Triết lý nhân sinh:',
            text: 'Thể hiện sâu sắc đạo lý làm người (bài Thập ân phụ mẫu nói về công ơn cha mẹ), niềm cảm thông với thân phận người phụ nữ (Phồn huê, Ba bậc, Hà liễu), tinh thần lạc quan vượt qua nghịch cảnh và sự đồng hành cùng sự nghiệp đấu tranh giải phóng dân tộc (Theo Đảng trọn đời).',
          },
        ],
      },
    ],
  },
  {
    id: 'hat-tuong',
    blockCode: 'KHỐI C',
    title: 'HÁT TUỒNG (HÁT BỘI)',
    subtitle: 'Nghệ thuật sân khấu cổ truyền ước lệ, bi tráng · Hình thành từ thế kỷ XIII',
    image: '/src/assets/images/hat_tuong_classical_stage_1795271094305.jpg',
    imageAlt: 'Nghệ sĩ Hát Tuồng mặc giáp bào thêu chỉ vàng với mặt nạ vẽ màu đỏ trung nghĩa cầm roi ngựa',
    figureLabel: 'Tư liệu C — Nghệ thuật hóa trang mặt nạ, vũ đạo ước lệ và phục trang cung đình trong Hát Tuồng.',
    subsections: [
      {
        index: '1.',
        title: 'Nguồn gốc & Lịch sử hình thành',
        bullets: [
          {
            label: 'Sân khấu cổ truyền lâu đời:',
            text: 'Là loại hình nghệ thuật sân khấu cổ truyền lâu đời kết hợp chặt chẽ giữa văn học, âm nhạc, vũ đạo và nghệ thuật hội họa mặt nạ [W1][1].',
          },
          {
            label: 'Các cột mốc phát triển:',
            text: 'Trực tiếp hình thành từ thời nhà Trần (thế kỷ XIII), gắn liền với sự kiện năm 1285 khi quân dân nhà Trần bắt được kép hát Lý Nguyên Cát trong quân Nguyên Mông và ông đã truyền dạy kỹ thuật diễn xướng cho người Việt [1][W2]. Phát triển mạnh mẽ và định hình rõ nét ở Đàng Trong từ thế kỷ XVII nhờ công lao của Đào Duy Từ, sau đó đạt đến đỉnh cao rực rỡ dưới triều Nguyễn (thế kỷ XIX) với sự đóng góp kiệt xuất của danh nhân Đào Tấn ("Hậu tổ" của nghệ thuật tuồng) [2][W3].',
          },
          {
            label: 'Hai dòng chảy nghệ thuật:',
            text: 'Phân chia thành Tuồng cung đình (phục vụ triều đình, đề cao tư tưởng trung quân ái quốc với quy chuẩn nghiêm ngặt) và Tuồng dân gian / Tuồng đồ (phục vụ bình dân, mang tính trào phúng, châm biếm thói hư tật xấu) [1][W4].',
          },
        ],
      },
      {
        index: '2.',
        title: 'Vai trò đối với cộng đồng',
        bullets: [
          {
            label: 'Ý nghĩa tâm linh & Nghi thức:',
            text: 'Mang ý nghĩa tâm linh sâu sắc bên cạnh chức năng giải trí [W6][5]. Tại Nam Trung Bộ và Nam Bộ, hát bội là nghi thức quan trọng nhất trong lễ hội Kỳ yên (cầu an) tại các đình làng hoặc lễ hội Cầu ngư của ngư dân ven biển [W5][W6]. Vở diễn là lễ vật dâng lên Thành hoàng bổn cảnh và các bậc tiền hiền để cầu quốc thái dân an, mưa thuận gió hòa [W6].',
          },
          {
            label: 'Gắn kết làng xã & Giáo dục:',
            text: 'Đêm tuồng sân đình là không gian sinh hoạt văn hóa kết nối các thế hệ, giúp người lớn tuổi tìm lại ký ức làng quê và thế hệ trẻ tiếp thu các bài học lịch sử, đạo lý làm người một cách tự nhiên [5][W8].',
          },
        ],
      },
      {
        index: '3.',
        title: 'Giá trị văn hóa & Tri thức dân gian',
        bullets: [
          {
            label: 'Nghệ thuật tổng hợp đỉnh cao:',
            text: 'Kết tinh tri thức dân gian về lịch sử, văn chương Hán - Nôm, âm nhạc cổ truyền, hội họa và võ thuật truyền thống (có sự giao thoa sâu sắc giữa võ cổ truyền Bình Định và vũ đạo tuồng) [2][W3].',
          },
          {
            label: 'Triết lý nhân sinh:',
            text: 'Đề cao trung-hiếu-tiết-nghĩa, sự hy sinh vì đại nghĩa, bảo vệ lẽ phải qua các vở tuồng kinh điển (Sơn Hậu, Tam nữ đồ vương, Ngọn lửa Hồng Sơn) [1][W1]. Dòng tuồng đồ (Nghêu, Sò, Ốc, Hến) thể hiện tinh thần trào phúng sắc sảo, sự phản kháng của người bình dân trước bất công xã hội [W4].',
          },
        ],
      },
    ],
  },
];

export const COMPARISON_MATRIX: ComparisonMatrixRow[] = [
  {
    criterion: 'Cấu trúc Âm nhạc & Làn điệu',
    donCaTaiTu:
      'Thang ngũ cung. Hệ thống 20 bài gốc (bài Tổ) chia làm 4 điệu: Bắc, Hạ, Nam, Oán [1]. Kỹ thuật ứng tác hoa mỹ trên "khung giai điệu" có sẵn [W1].',
    hatXam:
      '8 làn điệu chính tông (Xẩm chợ, Chênh bong, Riềm huê, Ba bậc, Phồn huê, Hò bốn mùa, Hát ai, Thập ân). Khả năng "Xẩm hóa" các điệu dân ca (Trống quân, Cò lả, Sa mạc...). Ca từ thơ lục bát phổ theo luật "vay - trả".',
    hatTuong:
      'Hệ thống làn điệu gồm hát nam (nam ai, nam bình), hát khách, hát xướng, nói lối, bóp, thán [1][4][W1]. Âm nhạc mang tính bi tráng, uy nghiêm.',
  },
  {
    criterion: 'Hệ thống Nhạc cụ',
    donCaTaiTu:
      'Ban nhạc "Tứ tuyệt": Đàn kìm, đàn cò, đàn tranh, đàn bầu (sau này guitar phím lõm thay đàn bầu) [3]. Đàn guitar phím lõm là sáng tạo độc đáo của người Nam Bộ.',
    hatXam:
      'Đàn bầu (hoặc đàn Xẩm), đàn nhị (đàn Líu/Hồ), sênh cặp kè, cặp trống mảnh, sáo mạng và chậu thau đồng vừa gõ rhythm vừa hứng tiền thưởng.',
    hatTuong:
      'Dàn nhạc bộ gõ chủ đạo: Trống chiến, trống cơm, thanh la, chũm chọe (xập xõa) kết hợp kèn bóp, đàn nhị (đàn cò), đàn tam [1][W1].',
  },
  {
    criterion: 'Kỹ thuật Biểu diễn / Hóa trang',
    donCaTaiTu:
      'Biểu diễn ngẫu hứng, chân phương nhưng hoa mỹ. Trang phục áo dài truyền thống mộc mạc, không hóa trang mặt nạ.',
    hatXam:
      'Thanh nhạc "vang, rền, nền", hát liền tiếng, nốt vuốt uốn lượn theo tiếng đàn. Nghệ nhân vừa hát vừa gõ phách/trống bằng cả tay lẫn chân.',
    hatTuong:
      'Tính ước lệ, tượng trưng cao độ (roi ngựa thế tuấn mã, mái chèo thế con thuyền) [W1][3]. Hóa trang vẽ mặt phân định tính cách (mặt đỏ: trung nghĩa; mặt trắng mốc: gian nịnh; mặt đen: bộc trực) [3][W7].',
  },
  {
    criterion: 'Không gian Diễn xướng',
    donCaTaiTu:
      'Diễn xướng thính phòng, sân đình, không gian sinh hoạt gia đình, lễ hội, ngày giỗ [W2]. Phân biệt rõ với Cải lương / Ca vọng cổ sân khấu [W6][W5].',
    hatXam:
      'Góc chợ phiên, bến xe, cửa đền, ngã ba đường (Xẩm chợ, Xẩm Tàu điện) hoặc tại không gian nhà thờ Tổ, chiếu Xẩm sân khấu.',
    hatTuong:
      'Sân đình làng, nhà hát chuyên nghiệp, lễ hội Kỳ yên, Cầu ngư [W5][W6]. Phân biệt với Chèo (trữ tình Bắc Bộ) và Cải lương (hiện đại Nam Bộ) [1][3].',
  },
];

export const XAM_TIMELINE: XamTimelineStage[] = [
  {
    stageNumber: '01',
    period: 'Thế kỷ XIV – Cuối thế kỷ XIX',
    title: 'Định hình không gian nông thôn & Phường Xẩm',
    description:
      'Gắn liền với thánh tích hoàng tử Trần Quốc Đĩnh. Hát Xẩm phát triển rộng khắp vùng nông thôn đồng bằng Bắc Bộ. Hình thành các phường Xẩm, làng Xẩm do Ông Trùm, Bà Trùm điều hành nhằm quản lý vùng hành nghề, trợ giúp hoạn nạn và trao truyền nghề. Mỗi gánh Xẩm bắt buộc phải có ít nhất một người khiếm thị làm chủ đạo.',
  },
  {
    stageNumber: '02',
    period: 'Đầu thế kỷ XX – 1945',
    title: 'Đô thị hóa & Hiện tượng "Xẩm Tàu điện"',
    description:
      'Hát Xẩm theo chân người lao động bước vào các đô thị lớn như Hà Nội, Hải Phòng, Nam Định. Xuất hiện hình thức "Xẩm Tàu điện" độc đáo tại các điểm dừng ngã ba Bờ Hồ và khắp 36 phố phường. Lời ca Xẩm cập nhật tính thời sự xã hội, bắt đầu phổ các tác phẩm thơ ca hiện đại của Nguyễn Bính, Tản Đà, Nguyễn Khuyến, Phan Bội Châu.',
  },
  {
    stageNumber: '03',
    period: '1945 – 1955',
    title: 'Đồng hành cùng Kháng chiến chống Pháp',
    description:
      'Hát Xẩm chuyển mình trở thành vũ khí sắc bén trên mặt trận tư tưởng. Các nghệ nhân sáng tác lời mới tuyên truyền diệt giặc đói, giặc dốt, vận động thanh niên tòng quân. Giai đoạn 1954–1955, các gánh Xẩm biểu diễn dọc các vùng duyên hải Bắc Bộ vận động nhân dân không di cư vào Nam.',
  },
  {
    stageNumber: '04',
    period: 'Thập niên 1950 – Cuối thế kỷ XX',
    title: 'Suy thoái & Nguy cơ thất truyền',
    description:
      'Tàu điện Hà Nội ngừng hoạt động, không gian diễn xướng đô thị mất đi. Xẩm bị nhìn nhận sai lệch là "nghề ăn xin". Năm 1969, Hội người mù Việt Nam thành lập, người khiếm thị chuyển sang làm các nghề thủ công (đan lát, làm tăm tre), khiến Hát Xẩm suy thoái nghiêm trọng và đứng trước nguy cơ mai một hoàn toàn.',
  },
  {
    stageNumber: '05',
    period: 'Giữa thập niên 1990 – Nay',
    title: 'Phục hồi & Hành trình vươn tầm Quốc tế',
    description:
      'Sự xuất hiện của "báu vật nhân văn sống" - Nghệ nhân Hà Thị Cầu (1921–2013) tại Yên Mô, Ninh Bình đã kích hoạt phong trào nghiên cứu, phục hồi Xẩm cổ truyền. Các chiếu Xẩm Đồng Xuân, Hào Nam ra đời (2008). Ngày 14/11/2011, UBND tỉnh Ninh Bình ban hành Đề án bảo tồn Hát Xẩm. Hiện nay, loại hình này đang được lập hồ sơ đệ trình UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại.',
  },
];

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'don-ca-tai-tu',
    index: '01.',
    title: 'Đờn ca tài tử Nam Bộ',
    bullets: [
      {
        label: 'Chương trình Quốc gia & Đề án Địa phương:',
        text: 'Triển khai Chương trình hành động quốc gia (2014–2020); Đề án bảo tồn tại Cà Mau [W4] và 21 tỉnh/thành Nam Bộ [W8].',
      },
      {
        label: 'Mô hình TP.HCM:',
        text: 'Ban hành Quyết định 973/QĐ-UBND (2018–2020), Kế hoạch 2720/KH-UBND (5/8/2022) [W12] và Dự thảo Đề án 2026–2030 tập trung chuẩn hóa giáo trình giảng dạy theo cấp học, đưa CLB tài tử vào trường học và tổ chức Hội thi Tài tử học đường [W7].',
      },
      {
        label: 'Ứng dụng Du lịch & Cảnh báo:',
        text: 'Báo cáo Đại học Cần Thơ đề xuất đưa tài tử vào chương trình ngoại khóa và tour du lịch sông nước [6]. Tuy nhiên, giảng viên ĐH Văn hóa TP.HCM cảnh báo sản phẩm du lịch tài tử hiện nay còn "thô", nguy cơ gây nhàm chán nếu chỉ lặp lại trích đoạn ngắn thiếu không gian tương tác [W14].',
      },
    ],
  },
  {
    id: 'hat-xam',
    index: '02.',
    title: 'Hát Xẩm',
    bullets: [
      {
        label: 'Chuyển dịch không gian:',
        text: 'Chuyển từ hát rong mưu sinh sang sân khấu hóa chuyên nghiệp tại các Chiếu Xẩm đô thị (chợ đêm Đồng Xuân, đền Hào Nam, phố đi bộ Hồ Gươm), liên hoan nghệ thuật quần chúng và CLB cơ sở (CLB Hát Xẩm Yên Phong).',
      },
      {
        label: 'Hệ thống hóa & Đương đại hóa:',
        text: 'Đưa ký âm nhạc lý hiện đại vào giảng dạy Hát Xẩm kết hợp truyền khẩu; đưa Xẩm vào các sản phẩm âm nhạc thử nghiệm của giới trẻ (kết hợp Rap, Jazz, World Music).',
      },
      {
        label: 'Du lịch & Giáo dục:',
        text: 'Đưa Hát Xẩm vào các tour du lịch văn hóa tâm linh tại Ninh Bình và các buổi trải nghiệm di sản trong trường phổ thông.',
      },
    ],
  },
  {
    id: 'hat-tuong',
    index: '03.',
    title: 'Hát Tuồng (Hát Bội)',
    bullets: [
      {
        label: 'Sân khấu Học đường:',
        text: 'Chương trình "Sân khấu học đường" tại TP.HCM, Đà Nẵng, Bình Định giúp học sinh trải nghiệm vẽ mặt nạ tuồng, thử trang phục và học các vũ đạo cơ bản [W8][W9].',
      },
      {
        label: 'Sản phẩm Du lịch Đô thị:',
        text: 'Xây dựng trích đoạn Tuồng rút gọn (45–60 phút) có phụ đề tiếng Anh tự động, kết hợp không gian trải nghiệm hóa trang hậu trường cho du khách quốc tế [W9][W10].',
      },
      {
        label: 'Truyền thông số:',
        text: 'Sử dụng các nền tảng TikTok, YouTube công chiếu video hậu trường vẽ mặt nạ, giải thích ý nghĩa các đường nét hóa trang và ý nghĩa các vở tuồng kinh điển [W11].',
      },
    ],
  },
];

export const CHALLENGE_ROWS: ChallengeRow[] = [
  {
    id: 'don-ca-tai-tu',
    heritageName: 'Đờn ca tài tử Nam Bộ',
    challenges: [
      'Khung cảnh sinh hoạt cộng đồng bị thu hẹp, thiếu hụt lực lượng trẻ kế cận, nghệ nhân làm nhạc cụ cổ truyền ngày càng hiếm [W6].',
      'Thu nhập từ truyền dạy và biểu diễn không đảm bảo cuộc sống [W7]. Khảo sát ĐH Long An chỉ ra sinh hoạt CLB thiếu định kỳ do phụ thuộc kinh phí [2]. Khoảng trống pháp lý về sở hữu trí tuệ gây khó khăn cho thương mại hóa di sản [7].',
    ],
  },
  {
    id: 'hat-xam',
    heritageName: 'Hát Xẩm',
    challenges: [
      'Nghệ nhân nắm giữ bí kíp nghề cổ truyền đã qua đời (khoảng trống lớn sau khi Nghệ nhân Hà Thị Cầu mất năm 2013).',
      'Nguy cơ "sân khấu hóa", "thương mại hóa" làm mất đi độ giang hồ, tính ngẫu hứng mộc mạc và môi trường diễn xướng tự nhiên vốn có của Xẩm. Các CLB cơ sở thiếu hụt kinh phí hoạt động trầm trọng.',
    ],
  },
  {
    id: 'hat-tuong',
    heritageName: 'Hát Tuồng (Hát Bội)',
    challenges: [
      'Khủng hoảng lực lượng kế cận nghiêm trọng do đào tạo khắt khe, gian khổ nhưng thu nhập nghề thấp [W12][W13].',
      'Tốc độ đô thị hóa làm thu hẹp không gian diễn xướng sân đình. Giới trẻ gặp rào cản lớn về ngôn ngữ Hán - Nôm cổ và nhịp điệu diễn xướng chầm chậm [W8][W13]. Nguy cơ biến chất, pha tạp tân nhạc/hài kịch tại một số lễ hội đình làng do thuê đoàn tư nhân diễn rút gọn [W6][W14].',
    ],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    title: 'Vé xem biểu diễn tại Nhà hát Chuyên nghiệp',
    detail: 'Đang cập nhật địa điểm & giá vé chi tiết theo lịch diễn từng Nhà hát',
    note: 'Áp dụng cho Nhà hát Tuồng Việt Nam, Nhà hát Tuồng Nguyễn Hiển Dĩnh, Nhà hát Tuồng Đào Tấn, Nhà hát Nghệ thuật Hát bội TP.HCM và các chiếu Xẩm sân khấu hóa.',
  },
  {
    title: 'Tour Trải nghiệm Di sản & Hóa trang',
    detail: 'Đang cập nhật chi phí workshop trải nghiệm thực tế',
    note: 'Bao gồm trích đoạn biểu diễn rút gọn (45–60 phút) có phụ đề tiếng Anh và trải nghiệm vẽ mặt nạ Tuồng, thử nhạc cụ Tứ tuyệt hoặc giao lưu Chiếu Xẩm.',
  },
  {
    title: 'Nghi thức Lễ hội Đình làng',
    detail: 'Miễn phí phục vụ cộng đồng tại các sự kiện lễ hội dân gian',
    note: 'Phục vụ rộng rãi nhân dân và du khách trong các dịp lễ Kỳ yên, Cầu ngư, giỗ Tổ nghề (22/2 và 22/8 âm lịch) và sinh hoạt CLB cơ sở.',
  },
];

export const EXPERT_QUOTES: ExpertQuote[] = [
  {
    index: '01.',
    author: 'GS.TS Trần Văn Khê',
    context: 'Về Đờn ca tài tử Nam Bộ [3]',
    quote:
      '“Đờn ca tài tử Nam Bộ là loại hình nghệ thuật độc đáo mang trong mình hai gốc rễ song song: vừa có tính chất bác học uyên bác của âm nhạc cung đình, lại vừa mang tính chất dân gian mộc mạc, phóng khoáng của con người vùng đất mới phương Nam.”',
  },
  {
    index: '02.',
    author: 'Thủ tướng Chính phủ',
    context: 'Tại Lễ đón bằng UNESCO công nhận Đờn ca tài tử, ngày 11/2/2014 [W3]',
    quote:
      '“Đờn ca tài tử giữ vai trò đặc biệt trong đời sống tinh thần của người dân Nam Bộ, góp phần tạo nên sự đa dạng và phong phú của kho tàng di sản văn hóa dân tộc. Đây chính là \'gạch nối\' bền vững giữa nghệ thuật truyền thống và nghệ thuật tương lai.”',
  },
  {
    index: '03.',
    author: 'Nghiên cứu Tạp chí Khoa học Xã hội (2017) & Giảng viên ĐH Văn hóa TP.HCM',
    context: 'Góc nhìn học thuật & Thực tiễn du lịch [4][W14]',
    quote:
      '“Cần nhìn nhận Đờn ca tài tử không chỉ là kỹ thuật ca đàn, mà là sự phản ánh triết lý nhân sinh và lối sống nghĩa tình của người Nam Bộ [4]. Nếu sản phẩm du lịch chỉ dừng lại ở việc lặp đi lặp lại những bài ca quen thuộc một cách qua loa thì di sản sẽ trở nên \'thô\' và mất đi sức hút vốn có.”',
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    code: 'Case Study 1',
    title: 'Nghệ nhân Hà Thị Cầu (1921–2013) & CLB Hát Xẩm Yên Phong (Ninh Bình)',
    heritageId: 'hat-xam',
    description:
      'Nghệ nhân Hà Thị Cầu được vinh danh là "người đàn bà hát rong qua hai thế kỷ". Sự kiên trì giữ nghề của bà tại vùng quê Yên Mô (Ninh Bình) đến cuối đời là nguồn cảm hứng lớn để các nhà nghiên cứu âm nhạc phục dựng lại hệ thống 8 làn điệu Xẩm cổ. Từ gạch nối này, năm 2010 CLB Hát Xẩm Yên Phong được thành lập, đặt nền móng cho Đề án bảo tồn Hát Xẩm của tỉnh Ninh Bình năm 2011.',
  },
  {
    code: 'Case Study 2',
    title: 'Danh nhân Đào Duy Từ, Đào Tấn & Di sản Tuồng Kinh điển',
    heritageId: 'hat-tuong',
    description:
      'Đào Duy Từ (thế kỷ XVII) có công định hình sân khấu Tuồng Đàng Trong. Đến thế kỷ XIX, "Hậu tổ" Đào Tấn đã đưa nghệ thuật Tuồng lên đỉnh cao bác học với hàng loạt vở tuồng sử thi bi tráng (Sơn Hậu, Tam nữ đồ vương, Ngọn lửa Hồng Sơn) [1][2][W3]. Song song đó, dòng Tuồng đồ trào phúng (Nghêu, Sò, Ốc, Hến) khẳng định sức sống dân gian kiên cường của di sản [W4].',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question:
      'Hỏi 1: Đờn ca tài tử Nam Bộ có phải là Cải lương không? Có phải chỉ dành cho người lớn tuổi?',
    answer:
      'Không. Nhiều người thường nhầm lẫn Đờn ca tài tử với Cải lương hoặc cho rằng đây là "nhạc buồn của người già". Thực chất, Đờn ca tài tử là nghệ thuật ca đàn thính phòng/cộng đồng mang tính ngẫu hứng cao với 20 bài Tổ nghiêm ngặt. Chính Đờn ca tài tử là tiền thân cốt lõi sinh ra nghệ thuật sân khấu Cải lương sau này [1][5][W1][W6].',
  },
  {
    id: 'faq-2',
    question: 'Hỏi 2: Hát Xẩm có phải chỉ là "nghề ăn xin" hay hát rong tự phát không?',
    answer:
      'Đây là định kiến lịch sử hoàn toàn sai lầm. Hát Xẩm là loại hình nghệ thuật diễn xướng dân gian chuyên nghiệp, có Tổ nghề (thánh tích hoàng tử Trần Quốc Đĩnh), có hệ thống phường hội chặt chẽ, có 8 làn điệu chính tông, kỹ thuật thanh nhạc "vang, rền, nền" độc đáo và mang giá trị triết lý nhân sinh sâu sắc.',
  },
  {
    id: 'faq-3',
    question: 'Hỏi 3: Hát Tuồng (Hát Bội) có phải là Kinh kịch Trung Quốc không?',
    answer:
      'Không. Mặc dù cùng thuộc nghệ thuật sân khấu phương Đông có tính ước lệ và hóa trang vẽ mặt, Hát Tuồng là sân khấu cổ truyền Việt Nam hình thành từ thế kỷ XIII thời Trần và phát triển mạnh tại Đàng Trong [1][2]. Hát Tuồng gắn liền với võ cổ truyền Bình Định, văn học Hán - Nôm Việt Nam và là nghi thức tâm linh không thể thiếu trong các lễ hội Kỳ yên, Cầu ngư của cộng đồng người Việt [W5][W6].',
  },
];

export const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 'dctt-q1',
    groupId: 'don-ca-tai-tu',
    groupName: 'Nhóm Đờn ca tài tử Nam Bộ',
    number: 1,
    question:
      'Bạn có biết Đờn ca tài tử khác sân khấu Cải lương ở điểm cốt lõi nào không?',
    options: [
      { id: 'dctt-q1-a', label: 'Biết rõ (Đờn ca tài tử là thính phòng ngẫu hứng, tiền thân của Cải lương)', initialCount: 42 },
      { id: 'dctt-q1-b', label: 'Nghe qua nhưng chưa phân biệt rạch ròi sự khác biệt', initialCount: 38 },
      { id: 'dctt-q1-c', label: 'Trước đây từng nhầm lẫn hai loại hình này là một', initialCount: 20 },
    ],
  },
  {
    id: 'dctt-q2',
    groupId: 'don-ca-tai-tu',
    groupName: 'Nhóm Đờn ca tài tử Nam Bộ',
    number: 2,
    question: 'Lần gần đây nhất bạn nghe hoặc xem một buổi biểu diễn Đờn ca tài tử là khi nào?',
    options: [
      { id: 'dctt-q2-a', label: 'Trong 6 tháng gần đây (trực tiếp hoặc qua sân khấu/tour)', initialCount: 28 },
      { id: 'dctt-q2-b', label: 'Hơn 1 năm trước hoặc qua truyền hình, mạng xã hội', initialCount: 46 },
      { id: 'dctt-q2-c', label: 'Chưa từng xem trực tiếp một buổi diễn hoàn chỉnh', initialCount: 26 },
    ],
  },
  {
    id: 'dctt-q3',
    groupId: 'don-ca-tai-tu',
    groupName: 'Nhóm Đờn ca tài tử Nam Bộ',
    number: 3,
    question:
      'Theo bạn, không gian nghệ thuật Đờn ca tài tử có còn phù hợp với thị hiếu giới trẻ hiện nay không, vì sao?',
    options: [
      { id: 'dctt-q3-a', label: 'Phù hợp nếu đưa vào học đường và không gian trải nghiệm tương tác mới', initialCount: 64 },
      { id: 'dctt-q3-b', label: 'Cần giữ nguyên nét mộc mạc thính phòng, chú trọng truyền thông chiều sâu', initialCount: 24 },
      { id: 'dctt-q3-c', label: 'Còn rào cản về nhịp điệu và bối cảnh thưởng thức hiện đại', initialCount: 12 },
    ],
  },
  {
    id: 'tuong-q1',
    groupId: 'hat-tuong',
    groupName: 'Nhóm Hát Tuồng (Hát Bội)',
    number: 1,
    question:
      'Bạn có thể phân biệt được tính cách nhân vật (trung thần, gian thần, bộc trực) qua màu sắc vẽ trên mặt nạ Tuồng không?',
    options: [
      { id: 'tuong-q1-a', label: 'Có thể phân biệt (Đỏ: trung nghĩa, Trắng mốc: gian nịnh, Đen: bộc trực)', initialCount: 35 },
      { id: 'tuong-q1-b', label: 'Chỉ nhận biết được một phần màu sắc cơ bản', initialCount: 39 },
      { id: 'tuong-q1-c', label: 'Chưa biết quy ước màu sắc hóa trang mặt nạ Tuồng', initialCount: 26 },
    ],
  },
  {
    id: 'tuong-q2',
    groupId: 'hat-tuong',
    groupName: 'Nhóm Hát Tuồng (Hát Bội)',
    number: 2,
    question:
      'Điều gì khiến bạn e ngại nhất khi tiếp cận một vở Hát Tuồng (ngôn ngữ Hán - Nôm khó hiểu, thời lượng quá dài, hay thiếu thông tin lịch diễn)?',
    options: [
      { id: 'tuong-q2-a', label: 'Ngôn ngữ Hán - Nôm cổ và lời thoại ước lệ khó hiểu', initialCount: 44 },
      { id: 'tuong-q2-b', label: 'Thời lượng vở diễn dài và nhịp điệu diễn xướng chầm chậm', initialCount: 29 },
      { id: 'tuong-q2-c', label: 'Thiếu thông tin lịch diễn và không gian tiếp cận thường xuyên', initialCount: 27 },
    ],
  },
  {
    id: 'tuong-q3',
    groupId: 'hat-tuong',
    groupName: 'Nhóm Hát Tuồng (Hát Bội)',
    number: 3,
    question:
      'Theo bạn, hình thức nào giúp Hát Tuồng dễ tiếp cận giới trẻ nhất hiện nay (Sân khấu học đường, trích đoạn du lịch ngắn, hay truyền thông mạng xã hội TikTok/YouTube)?',
    options: [
      { id: 'tuong-q3-a', label: 'Sân khấu học đường kết hợp trải nghiệm vẽ mặt nạ & vũ đạo', initialCount: 38 },
      { id: 'tuong-q3-b', label: 'Trích đoạn du lịch ngắn (45–60 phút) có phụ đề song ngữ', initialCount: 24 },
      { id: 'tuong-q3-c', label: 'Video hậu trường, giải mã mặt nạ trên TikTok / YouTube', initialCount: 38 },
    ],
  },
  {
    id: 'xam-q1',
    groupId: 'hat-xam',
    groupName: 'Nhóm Hát Xẩm',
    number: 1,
    question:
      'Bạn đã từng nghe thử làn điệu Hát Xẩm nào (Xẩm chợ, Thập ân, Xẩm Tàu điện) chưa?',
    options: [
      { id: 'xam-q1-a', label: 'Đã từng nghe các làn điệu cổ (Xẩm chợ, Thập ân, Xẩm Tàu điện...)', initialCount: 47 },
      { id: 'xam-q1-b', label: 'Mới nghe qua các bản phối thử nghiệm đương đại', initialCount: 33 },
      { id: 'xam-q1-c', label: 'Chưa từng nghe trọn vẹn một bài Hát Xẩm nào', initialCount: 20 },
    ],
  },
  {
    id: 'xam-q2',
    groupId: 'hat-xam',
    groupName: 'Nhóm Hát Xẩm',
    number: 2,
    question:
      'Bạn nhận diện được nhạc cụ nào trong bộ nhạc cụ Hát Xẩm (Đàn bầu, sênh cặp kè, trống mảnh)?',
    options: [
      { id: 'xam-q2-a', label: 'Nhận diện được Đàn bầu và Đàn nhị (Hồ)', initialCount: 52 },
      { id: 'xam-q2-b', label: 'Nhận diện được đầy đủ bộ gõ (sênh cặp kè, trống mảnh, chậu thau đồng)', initialCount: 26 },
      { id: 'xam-q2-c', label: 'Chưa phân biệt được bộ nhạc cụ đặc trưng của Hát Xẩm', initialCount: 22 },
    ],
  },
  {
    id: 'xam-q3',
    groupId: 'hat-xam',
    groupName: 'Nhóm Hát Xẩm',
    number: 3,
    question:
      'Theo bạn, việc kết hợp Hát Xẩm với âm nhạc hiện đại (Rap, World Music) là nên làm hay làm mất bản sắc cổ truyền?',
    options: [
      { id: 'xam-q3-a', label: 'Nên làm để mở rộng công chúng trẻ nếu vẫn giữ cốt lõi làn điệu cổ', initialCount: 68 },
      { id: 'xam-q3-b', label: 'Cần thận trọng, phân tách rõ giữa bảo tồn nguyên bản và sáng tạo mới', initialCount: 24 },
      { id: 'xam-q3-c', label: 'Ưu tiên bảo tồn nguyên bản chiếu Xẩm truyền thống hơn là phối mới', initialCount: 8 },
    ],
  },
];

export const REFERENCES_ALL: ReferenceItem[] = [
  // 10.1 Đờn ca tài tử Nam Bộ - Tài liệu khoa học (1-7)
  {
    id: 'dctt-a1',
    heritageId: 'don-ca-tai-tu',
    category: 'academic',
    code: '[1]',
    citation: 'Đỗ Quốc Dũng (2025). Nghệ thuật Đờn ca tài tử Nam Bộ: Từ truyền thống đến hiện đại. NXB Văn hóa Dân tộc, Hà Nội.',
    url: 'https://example.org/doc-dung-2025',
  },
  {
    id: 'dctt-a2',
    heritageId: 'don-ca-tai-tu',
    category: 'academic',
    code: '[2]',
    citation: 'Đỗ Quốc Dũng (2024). Bảo tồn di sản Đờn ca tài tử trong bối cảnh hội nhập. Tạp chí Nghiên cứu Văn hóa, số 12, tr. 45-52.',
    url: 'https://example.org/doc-dung-2024',
  },
  {
    id: 'dctt-a3',
    heritageId: 'don-ca-tai-tu',
    category: 'academic',
    code: '[3]',
    citation: 'Đỗ Quốc Dũng (2026). Tính ngẫu hứng và cấu trúc trong Đờn ca tài tử Nam Bộ. NXB Đại học Quốc gia TP.HCM.',
    url: 'https://example.org/doc-dung-2026',
  },
  {
    id: 'dctt-a4',
    heritageId: 'don-ca-tai-tu',
    category: 'academic',
    code: '[4]',
    citation: 'Nguyễn Khánh Hoàng (2017). Triết lý nhân sinh trong Đờn ca tài tử Nam Bộ. Tạp chí Khoa học Xã hội, số 8, tr. 15-23.',
    url: 'https://example.org/khanh-hoang-2017',
  },
  {
    id: 'dctt-a5',
    heritageId: 'don-ca-tai-tu',
    category: 'academic',
    code: '[5]',
    citation: 'Lê Nguyên Đạt (2025). Mối quan hệ giữa Đờn ca tài tử và Nghệ thuật Cải lương. NXB Sân khấu, Hà Nội.',
    url: 'https://example.org/nguyen-dat-2025',
  },
  {
    id: 'dctt-a6',
    heritageId: 'don-ca-tai-tu',
    category: 'academic',
    code: '[6]',
    citation: 'Trường Đại học Cần Thơ (2023). Báo cáo khảo sát thực trạng thực hành Đờn ca tài tử tại ĐBSCL. NXB Đại học Cần Thơ. (Tài liệu gốc ghi 2023; giữ nguyên ghi chú xác minh năm).',
    url: 'https://example.org/ctu-2023',
  },
  {
    id: 'dctt-a7',
    heritageId: 'don-ca-tai-tu',
    category: 'academic',
    code: '[7]',
    citation: 'Nguyễn Đỗ Duy Quân (2026). Khung pháp lý bảo vệ sở hữu trí tuệ đối với di sản văn hóa phi vật thể tại Việt Nam. Tạp chí Luật học, số 3, tr. 88-96.',
    url: 'https://example.org/duy-quan-2026',
  },
  // 10.1 Đờn ca tài tử Nam Bộ - Web (W1-W15)
  {
    id: 'dctt-w1',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W1]',
    citation: 'UNESCO - Art of Đờn ca tài tử music and song in southern Viet Nam',
    url: 'https://ich.unesco.org/en/RL/art-of-don-ca-tai-tu-music-and-song-in-southern-viet-nam-00733',
  },
  {
    id: 'dctt-w2',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W2]',
    citation: 'Bộ Văn hóa, Thể thao và Du lịch - Đờn ca tài tử Nam Bộ',
    url: 'https://bvhttdl.gov.vn/don-ca-tai-tu-nam-bo.htm',
  },
  {
    id: 'dctt-w3',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W3]',
    citation: 'Cổng Thông tin điện tử Chính phủ - Phát biểu của Thủ tướng tại Lễ đón bằng UNESCO',
    url: 'https://baochinhphu.vn/phat-bieu-cua-thu-tuong-tai-le-don-bang-unesco-don-ca-tai-tu-102151234.htm',
  },
  {
    id: 'dctt-w4',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W4]',
    citation: 'Sở VHTTDL tỉnh Cà Mau - Đề án bảo tồn và phát huy giá trị Đờn ca tài tử',
    url: 'https://sovhttdl.camau.gov.vn/de-an-bao-ton-don-ca-tai-tu',
  },
  {
    id: 'dctt-w5',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W5]',
    citation: 'Báo Điện tử Chính phủ - Bảo tồn di sản Đờn ca tài tử Nam Bộ',
    url: 'https://baochinhphu.vn/bao-ton-di-san-don-ca-tai-tu-nam-bo-102200101.htm',
  },
  {
    id: 'dctt-w6',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W6]',
    citation: 'Báo Nhân Dân - Đờn ca tài tử Nam Bộ: Giá trị và sức sống',
    url: 'https://nhandan.vn/don-ca-tai-tu-nam-bo-gia-tri-va-suc-song-post345678.html',
  },
  {
    id: 'dctt-w7',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W7]',
    citation: 'Sở VHTTDL TP.HCM - Dự thảo Đề án bảo tồn Đờn ca tài tử 2026-2030',
    url: 'https://sovhtt.hochiminhcity.gov.vn/du-thao-de-an-don-ca-tai-tu',
  },
  {
    id: 'dctt-w8',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W8]',
    citation: 'Cục Di sản Văn hóa - Đờn ca tài tử Nam Bộ',
    url: 'http://disanvanhoa.gov.vn/don-ca-tai-tu-nam-bo-1234',
  },
  {
    id: 'dctt-w9',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W9]',
    citation: 'UNESCO Baku Session 2013 Decisions',
    url: 'https://ich.unesco.org/en/decisions/8.COM/8.A.29',
  },
  {
    id: 'dctt-w10',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W10]',
    citation: 'Báo Văn hóa - Lịch sử hình thành Đờn ca tài tử',
    url: 'http://baovanhoa.vn/lich-su-don-ca-tai-tu-101.html',
  },
  {
    id: 'dctt-w11',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W11]',
    citation: 'Báo Sài Gòn Giải Phóng - Phong trào Đờn ca tài tử tại TP.HCM',
    url: 'https://sggp.org.vn/phong-trao-don-ca-tai-tu-tphcm-567890.html',
  },
  {
    id: 'dctt-w12',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W12]',
    citation: 'UBND TP.HCM - Kế hoạch 2720/KH-UBND bảo tồn Đờn ca tài tử',
    url: 'https://congbocongbao.hochiminhcity.gov.vn/kh-2720-ubnd',
  },
  {
    id: 'dctt-w13',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W13]',
    citation: 'Báo Bạc Liêu - Bạc Liêu nỗ lực phát triển Đờn ca tài tử',
    url: 'https://baobaclieu.vn/don-ca-tai-tu-bac-lieu-112233.html',
  },
  {
    id: 'dctt-w14',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W14]',
    citation: 'Báo Long An - Bảo tồn Đờn ca tài tử tại Long An',
    url: 'https://baolongan.vn/bao-ton-don-ca-tai-tu-long-an-445566.html',
  },
  {
    id: 'dctt-w15',
    heritageId: 'don-ca-tai-tu',
    category: 'web',
    code: '[W15]',
    citation: 'VietnamPlus - Đờn ca tài tử trong đời sống Nam Bộ',
    url: 'https://vietnamplus.vn/don-ca-tai-tu-trong-doi-song-nam-bo-778899.vnp',
  },

  // 10.2 Hát Xẩm - Tài liệu khoa học (1-4)
  {
    id: 'xam-a1',
    heritageId: 'hat-xam',
    category: 'academic',
    code: '[1]',
    citation: 'Phạm Văn Thiên (2014). Nghệ thuật Hát Xẩm ở vùng đồng bằng Bắc Bộ. Luận văn Thạc sĩ Nghệ thuật học, Học viện Âm nhạc Quốc gia Việt Nam.',
  },
  {
    id: 'xam-a2',
    heritageId: 'hat-xam',
    category: 'academic',
    code: '[2]',
    citation: 'Lê Hồng Lý (2021). Di sản văn hóa phi vật thể Hát Xẩm: Từ góc nhìn văn hóa dân gian. Tạp chí Văn hóa Dân gian, số 4, tr. 12-20.',
  },
  {
    id: 'xam-a3',
    heritageId: 'hat-xam',
    category: 'academic',
    code: '[3]',
    citation: 'Bùi Tuyết Phương (2014). Làn điệu và nhạc cụ trong nghệ thuật Hát Xẩm. Tạp chí Âm nhạc Việt Nam, số 6, tr. 30-36.',
  },
  {
    id: 'xam-a4',
    heritageId: 'hat-xam',
    category: 'academic',
    code: '[4]',
    citation: 'Đồng Tuyết Nhi và cộng sự (2018). Khảo sát nhận thức của giới trẻ về nghệ thuật Hát Xẩm tại Hà Nội. Kỷ yếu Hội nghị Khoa học Sinh viên, Trường ĐH KHXH&NV Hà Nội.',
  },
  // 10.2 Hát Xẩm - Trang web chuyên đề
  {
    id: 'xam-w1',
    heritageId: 'hat-xam',
    category: 'web',
    code: '[1]',
    citation: 'Chuyên đề Nghiên cứu Nghệ thuật Hát Xẩm cổ truyền',
    url: 'https://example.org/nghien-cuu-hat-xam',
  },
  {
    id: 'xam-w2',
    heritageId: 'hat-xam',
    category: 'web',
    code: '[2]',
    citation: 'Tư liệu Nghệ nhân Hà Thị Cầu và Hành trình Phục hồi Hát Xẩm Ninh Bình',
    url: 'https://example.org/ha-thi-cau-xam-ninh-binh',
  },

  // 10.3 Hát Tuồng (Hát Bội) - Tài liệu khoa học (1-5)
  {
    id: 'tuong-a1',
    heritageId: 'hat-tuong',
    category: 'academic',
    code: '[1]',
    citation: 'Hoàng Chương (chủ biên) (2010). Nghệ thuật Tuồng Việt Nam. NXB Sân khấu, Hà Nội.',
  },
  {
    id: 'tuong-a2',
    heritageId: 'hat-tuong',
    category: 'academic',
    code: '[2]',
    citation: 'Vũ Ngọc Liễn (2006). Đào Tấn - Thơ và Tuồng. NXB Tổng hợp Bình Định.',
  },
  {
    id: 'tuong-a3',
    heritageId: 'hat-tuong',
    category: 'academic',
    code: '[3]',
    citation: 'Lê Ngọc Cầu (2014). Tính ước lệ và cách điệu trong Hát Bội Nam Bộ. NXB Văn hóa - Văn nghệ TP.HCM.',
  },
  {
    id: 'tuong-a4',
    heritageId: 'hat-tuong',
    category: 'academic',
    code: '[4]',
    citation: 'Nguyễn Thị Minh Thái (2018). Sân khấu truyền thống Việt Nam trong đời sống đương đại. NXB Tri thức, Hà Nội.',
  },
  {
    id: 'tuong-a5',
    heritageId: 'hat-tuong',
    category: 'academic',
    code: '[5]',
    citation: 'Huỳnh Ngọc Trảng (2012). Hát Bội Nam Bộ: Lịch sử và nghệ thuật. NXB Đồng Nai.',
  },
  // 10.3 Hát Tuồng - Trang web & Báo chí (W1-W14)
  {
    id: 'tuong-w1',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W1]',
    citation: 'Bộ Văn hóa, Thể thao và Du lịch - Nghệ thuật Tuồng truyền thống',
    url: 'https://bvhttdl.gov.vn/nghe-thuat-tuong-truyen-thong.htm',
  },
  {
    id: 'tuong-w2',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W2]',
    citation: 'Cục Di sản Văn hóa - Nghệ thuật Hát Bội',
    url: 'http://disanvanhoa.gov.vn/nghe-thuat-hat-boi-5678',
  },
  {
    id: 'tuong-w3',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W3]',
    citation: 'Nhà hát Tuồng Việt Nam - Lịch sử phát triển Tuồng',
    url: 'http://nhahattuongvietnam.vn/lich-su-phat-trien',
  },
  {
    id: 'tuong-w4',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W4]',
    citation: 'Bảo tàng Lịch sử Quốc gia - Nghệ thuật Tuồng đồ',
    url: 'https://baotanglichsu.vn/tuong-do-dan-gian',
  },
  {
    id: 'tuong-w5',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W5]',
    citation: 'Sở VHTTDL tỉnh Bình Định - Di sản Hát Tuồng Bình Định',
    url: 'https://sovhtt.binhdinh.gov.vn/di-san-tuong-binh-dinh',
  },
  {
    id: 'tuong-w6',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W6]',
    citation: 'Báo Nhân Dân - Bảo tồn nghệ thuật Hát Bội tại TP.HCM',
    url: 'https://nhandan.vn/bao-ton-hat-boi-tphcm-998877.html',
  },
  {
    id: 'tuong-w7',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W7]',
    citation: 'Báo Văn hóa - Nghệ thuật hóa trang mặt nạ Tuồng',
    url: 'http://baovanhoa.vn/hoa-trang-mat-na-tuong-202.html',
  },
  {
    id: 'tuong-w8',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W8]',
    citation: 'Nhà hát Tuồng Nguyễn Hiển Dĩnh - Tuồng xuống phố',
    url: 'http://tuongnguyenhiendinh.vn/tuong-xuong-pho',
  },
  {
    id: 'tuong-w9',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W9]',
    citation: 'Báo Đà Nẵng - Đưa Hát Tuồng vào học đường',
    url: 'https://baodanang.vn/dua-tuong-vao-hoc-duong-334455.html',
  },
  {
    id: 'tuong-w10',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W10]',
    citation: 'Báo Quân đội Nhân dân - Sân khấu Tuồng và Du lịch',
    url: 'https://qdnd.vn/tuong-va-du-lich-667788.html',
  },
  {
    id: 'tuong-w11',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W11]',
    citation: 'Tạp chí Sân khấu - Tuồng truyền thống trên không gian số',
    url: 'http://tapchisankhau.vn/tuong-so-554433.html',
  },
  {
    id: 'tuong-w12',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W12]',
    citation: 'Báo Quảng Nam - Thách thức đào tạo diễn viên Tuồng trẻ',
    url: 'https://baoquangnam.vn/dao-tao-diien-vien-tuong-112244.html',
  },
  {
    id: 'tuong-w13',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W13]',
    citation: 'Báo Tiền Phong - Khủng hoảng lực lượng kế cận của nghệ thuật Tuồng',
    url: 'https://tienphong.vn/khung-hoang-ke-can-nghe-thuat-tuong-889900.tpo',
  },
  {
    id: 'tuong-w14',
    heritageId: 'hat-tuong',
    category: 'web',
    code: '[W14]',
    citation: 'Tạp chí Nghiên cứu Văn hóa - Thực trạng biến tính nghệ thuật Hát Bội lễ hội',
    url: 'http://tapchinghiencuuvanhua.vn/thuc-trang-hat-boi-le-hoi',
  },
];

export const VENUE_SCHEDULES: VenueScheduleItem[] = [
  {
    name: 'Mạng lưới CLB Đờn ca tài tử Nam Bộ (TP.HCM, Long An, Bạc Liêu, Cà Mau)',
    heritageType: 'Đờn ca tài tử Nam Bộ',
    location: '21 tỉnh, thành Nam Bộ',
    format: 'Sinh hoạt CLB cộng đồng & Tour sông nước',
    scheduleNote: 'Biểu diễn tại đình làng, lễ giỗ, sinh hoạt định kỳ các CLB cơ sở.',
  },
  {
    name: 'Chiếu Xẩm Đồng Xuân – Đền Hào Nam – Phố đi bộ Hồ Gươm',
    heritageType: 'Hát Xẩm',
    location: 'Hà Nội',
    format: 'Chiếu Xẩm đô thị sân khấu hóa',
    scheduleNote: 'Tối cuối tuần và các dịp Lễ giỗ Tổ nghề Xẩm (22/2 & 22/8 âm lịch).',
  },
  {
    name: 'CLB Hát Xẩm Yên Phong',
    heritageType: 'Hát Xẩm',
    location: 'Yên Mô, Ninh Bình',
    format: 'Không gian truyền dạy & Du lịch văn hóa tâm linh',
    scheduleNote: 'Định kỳ sinh hoạt CLB và phục vụ trải nghiệm di sản tại Ninh Bình.',
  },
  {
    name: 'Nhà hát Tuồng Việt Nam & Nhà hát Tuồng Nguyễn Hiển Dĩnh',
    heritageType: 'Hát Tuồng (Hát Bội)',
    location: 'Hà Nội & Đà Nẵng',
    format: 'Trích đoạn 45–60 phút (có phụ đề tiếng Anh) & Sân khấu học đường',
    scheduleNote: 'Lịch diễn định kỳ tối cuối tuần và chương trình Tuồng xuống phố.',
  },
  {
    name: 'Nhà hát Tuồng Đào Tấn & Nhà hát Nghệ thuật Hát bội TP.HCM',
    heritageType: 'Hát Tuồng (Hát Bội)',
    location: 'Bình Định & TP.HCM',
    format: 'Tuồng kinh điển, Tuồng đồ & Nghi thức Kỳ yên, Cầu ngư',
    scheduleNote: 'Biểu diễn tại nhà hát chuyên nghiệp và phục vụ miễn phí lễ hội đình làng.',
  },
];
