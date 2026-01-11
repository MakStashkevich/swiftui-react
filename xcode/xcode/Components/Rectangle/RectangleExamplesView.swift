
import SwiftUI

struct RectangleExamplesView: View {
    var body: some View {
        List {
            Rectangle()
                .fill(Color.purple)
                .frame(width: 150, height: 100)
                .navigationTitle("Default Rectangle")
            
            Rectangle()
                .stroke(Color.orange, lineWidth: 3)
                .frame(width: 150, height: 100)
                .navigationTitle("Stroked Rectangle")
            
            RoundedRectangle(cornerRadius: 25, style: .continuous)
                .fill(Color.pink)
                .frame(width: 150, height: 100)
                .navigationTitle("Rounded Rectangle")
        }
        .navigationTitle("Rectangle Examples")
    }
}

struct RectangleExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        RectangleExamplesView()
    }
}
