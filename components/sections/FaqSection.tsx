"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_LEFT = [
  {
    q: "Câu trả lời của tôi có bị tiết lộ không?",
    a: "Không. Hệ thống không lưu tên hay mã nhân viên cùng với câu trả lời. Kết quả chỉ được tổng hợp và báo cáo theo nhóm, tối thiểu 5 người để đảm bảo không ai bị nhận diện cá nhân.",
  },
  {
    q: "Nếu tôi cho điểm thấp hay đánh giá tệ thì có bị ảnh hưởng gì không?",
    a: "Hoàn toàn không. EES là khảo sát ẩn danh/bảo mậtkhông ai, biết bạn chấm mấy điểm. Điền thấp ở những điểm bạn thực sự chưa hài lòng là thông tin quan trọng nhất để GHN cải thiện đúng chỗ.",
  },
  {
    q: "Tôi không có điện thoại thông minh thì làm sao?",
    a: "EX Team/HRBP sẽ on-site trực tiếp tại các KTC và bưu cục lớn — mang theo tablet để hỗ trợ. Bạn cũng có thể nhờ quản lý/HRBP tại đơn vị hỗ trợ truy cập link từ máy tính để thực hiện khảo sát.",
  },
  {
    q: "Tôi bỏ giữa chừng có sao không?",
    a: "Khảo sát lưu tự động. Bạn có thể quay lại để tiếp tục làm khảo sát. Nếu thoát ra, bạn cần mở link mới từ đầu — nhưng chỉ mất thêm 10 phút.",
  },
];

const FAQ_RIGHT = [
  {
    q: "Kết quả EES được dùng như thế nào?",
    a: "Kết quả được phân tích theo 5 tiêu chí gắn kết và tổng hợp thành báo cáo chi tiết cho từng Khối/Phòng ban. Action Plan được trình CPO/BOD tháng 6 và công bố toàn công ty tháng 7/2026.",
  },
  {
    q: "Tại sao có 6 bộ câu hỏi khác nhau?",
    a: "Vì công việc của shipper, nhân viên kho và nhân viên văn phòng hoàn toàn khác nhau. Dùng chung một bộ câu hỏi sẽ không phản ánh đúng thực tế của từng nhóm. Mỗi bộ có 25-26 câu phù hợp với trải nghiệm cụ thể của nhóm đó.",
  },
  {
    q: "EES Race — nếu đơn vị tôi không thắng thì sao?",
    a: "EES Race là sân chơi để mỗi đơn vị bứt phá, nhưng giá trị không chỉ nằm ở vị trí dẫn đầu. Mỗi phản hồi đều góp phần giúp GHN cải thiện và phát triển tốt hơn. Và nếu đơn vị bạn chạm đích đầu tiên — phần thưởng sẽ là thành quả xứng đáng cho cả team.",
  },
  {
    q: "Thắc mắc không có trong FAQ — liên hệ ai?",
    a: "Liên hệ trực tiếp HRBP của đơn vị bạn — họ được tập huấn đầy đủ về EES 2026. Hoặc nhắn GTalk @EX_Team nếu bạn có câu hỏi cần được giải đáp.",
  },
];

function FaqColumn({ items }: { items: typeof FAQ_LEFT }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIdx === i;

        return (
          <div
            key={i}
            style={{ borderBottom: "1px solid #E0DDD6" }}
          >
            {/* Question */}
            <div
              onClick={() => setOpenIdx(isOpen ? null : i)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.9rem 0",
                cursor: "pointer",
                gap: "1rem",
                userSelect: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: "#0A1F44",
                }}
              >
                {item.q}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  width: "20px",
                  height: "20px",
                  flexShrink: 0,
                  border: isOpen ? "1.5px solid #0A1F44" : "1.5px solid #E0DDD6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  color: isOpen ? "#fff" : "#888",
                  background: isOpen ? "#0A1F44" : "transparent",
                  transition: "background 0.2s, color 0.2s, border-color 0.2s",
                }}
              >
                +
              </motion.div>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      fontSize: "0.84rem",
                      color: "#888",
                      lineHeight: 1.65,
                      paddingBottom: "1rem",
                    }}
                  >
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section
      id="faq"
      style={{
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1rem, 4vw, 2.5rem)",
        borderBottom: "1px solid #E0DDD6",
      }}
    >
      {/* Label */}
      <div
        style={{
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#FF5200",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          marginBottom: "1.5rem",
        }}
      >
        Câu hỏi thường gặp
        <span style={{ flex: 1, height: "1px", background: "#E0DDD6" }} />
      </div>

      {/* 2-col FAQ grid */}
      <div
        className="ghn-grid-2col"
        style={{
          gap: "0 3rem",
          marginTop: "2rem",
        }}
      >
        <FaqColumn items={FAQ_LEFT} />
        <FaqColumn items={FAQ_RIGHT} />
      </div>
    </section>
  );
}